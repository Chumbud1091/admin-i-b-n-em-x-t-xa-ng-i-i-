import React, { useCallback, useRef, useState } from "react";
import { AddCarPageStyles, toastStyles } from "../../assets/dummyStyles";
import { toast } from "react-toastify";
import client from "../../../services/client";

const AddCar = () => {
  const initialFormData = {
    make: "",
    model: "",
    year: "",
    price: "",
    color: "",
    category: "Sedan",
    seats: "",
    transmission: "Automatic",
    fuelType: "Gasoline",
    engine: "",
    horsepower: "",
    description: "",
    images: [],   
    imagePreviews: [], 
  };

  const [data, setData] = useState(initialFormData);
  const fileRef = useRef(null);

  const resetForm = useCallback(() => {
    data.imagePreviews?.forEach((url) => {
      try {
        URL.revokeObjectURL(url);
      } catch {}
    });

    setData(initialFormData);
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  }, [data.imagePreviews]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleImagesChange = useCallback(
    (e) => {
      const files = Array.from(e.target.files || []);
      if (!files.length) {
        setData((prev) => ({
          ...prev,
          images: [],
          imagePreviews: [],
        }));
        return;
      }

      data.imagePreviews?.forEach((url) => {
        try {
          URL.revokeObjectURL(url);
        } catch {}
      });

      const previews = files.map((file) => URL.createObjectURL(file));

      setData((prev) => ({
        ...prev,
        images: files,
        imagePreviews: previews,
      }));
    },
    [data.imagePreviews]
  );

  const showToast = useCallback((type, title, message, icon) => {
    const toastConfig = {
      position: "top-right",
      className: toastStyles[type].container,
      bodyClassName: toastStyles[type].body,
      autoClose: type === "success" ? 3000 : 4000,
    };

    toast[type](
      <div className="flex items-center">
        {icon}
        <div>
          <p
            className={
              type === "success" ? "font-bold text-lg" : "font-semibold"
            }
          >
            {title}
          </p>
          <p>{message}</p>
        </div>
      </div>,
      toastConfig
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const carLabel = `${data.make || ""} ${data.model || ""}`.trim();

    try {
      const formData = new FormData();

      const fieldMappings = {
        make: data.make,
        model: data.model,
        year: data.year,
        price: data.price,
        color: data.color || "",
        category: data.category,
        seats: data.seats || 4,
        transmission: data.transmission || "Automatic",
        fuelType: data.fuelType || "Gasoline",
        engine: data.engine || "",
        horsepower: data.horsepower || "",
        description: data.description || "",
      };

      Object.entries(fieldMappings).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (data.images && data.images.length > 0) {
        data.images.forEach((file) => {
          formData.append("images", file);
        });
      }

      await client.post("/api/cars", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      showToast(
        "success",
        "Congratulations!",
        carLabel
          ? `Your ${carLabel} has been listed successfully`
          : "Your car has been listed successfully",
        <svg
          className={AddCarPageStyles.iconLarge}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      );

      resetForm();
    } catch (err) {
      console.error("Failed to submit car:", err);
      const msg =
        err.response?.data?.message || err.message || "Failed to list car";

      showToast(
        "error",
        "Error",
        msg,
        <svg
          className={AddCarPageStyles.iconMedium}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      );
    }
  };

  const renderInputField = (field) => (
    <div key={field.name}>
      <label className={AddCarPageStyles.label}>{field.label}</label>
      <input
        required={field.required}
        name={field.name}
        value={data[field.name]}
        onChange={handleChange}
        type={field.type || "text"}
        className={AddCarPageStyles.input}
        placeholder={field.placeholder}
        min={field.min}
        max={field.max}
      />
    </div>
  );

  const renderSelectField = (field) => (
    <div key={field.name}>
      <label className={AddCarPageStyles.label}>{field.label}</label>
      <select
        required={field.required}
        name={field.name}
        value={data[field.name]}
        onChange={handleChange}
        className={AddCarPageStyles.select}
      >
        {field.options.map((option) =>
          typeof option === "object" ? (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ) : (
            <option key={option} value={option}>
              {option}
            </option>
          )
        )}
      </select>
    </div>
  );

  const leftColumnFields = [
    {
      type: "input",
      config: {
        name: "make",
        label: "Make",
        required: true,
        placeholder: "e.g., Toyota",
      },
    },
    {
      type: "input",
      config: {
        name: "price",
        label: "Price ($)",
        type: "number",
        required: true,
        min: "1",
        placeholder: "30000",
      },
    },
    {
      type: "select",
      config: {
        name: "seats",
        label: "Seats",
        required: true,
        options: [2, 4, 5, 6, 7, 8].map((n) => ({
          value: n,
          label: `${n} seats`,
        })),
      },
    },
    {
      type: "select",
      config: {
        name: "fuelType",
        label: "Fuel Type",
        required: true,
        options: ["Gasoline", "Diesel", "Electric", "Hybrid", "CNG"],
      },
    },
    {
      type: "select",
      config: {
        name: "category",
        label: "Category",
        required: true,
        options: ["Sedan", "SUV", "Sports", "Coupe", "Hatchback", "Luxury"],
      },
    },
  ];

  const rightColumnFields = [
    {
      type: "input",
      config: {
        name: "year",
        label: "Year",
        type: "number",
        required: true,
        min: "1990",
        max: new Date().getFullYear(),
        placeholder: "2022",
      },
    },
    {
      type: "input",
      config: {
        name: "model",
        label: "Model",
        required: true,
        placeholder: "e.g., Camry XLE",
      },
    },
    {
      type: "input",
      config: {
        name: "color",
        label: "Color",
        required: false,
        placeholder: "e.g., White",
      },
    },
    {
      type: "input",
      config: {
        name: "engine",
        label: "Engine",
        required: false,
        placeholder: 'e.g., "2.0L Turbo"',
      },
    },
    {
      type: "input",
      config: {
        name: "horsepower",
        label: "Horsepower",
        type: "number",
        required: false,
        placeholder: "e.g., 250",
      },
    },
  ];

  return (
    <div className={AddCarPageStyles.pageContainer}>
      <div className={AddCarPageStyles.fixedBackground} />
      <div className={AddCarPageStyles.gradientBlob1} />
      <div className={AddCarPageStyles.gradientBlob2} />
      <div className={AddCarPageStyles.gradientBlob3} />

      <div className={AddCarPageStyles.headerContainer}>
        <div className={AddCarPageStyles.headerDivider} />
        <h1 className={AddCarPageStyles.title}>
          <span className={AddCarPageStyles.titleGradient}>Add Car</span>
        </h1>

        <p className={AddCarPageStyles.subtitle}>
          Add more cars to your showroom
        </p>
      </div>

      <div className={AddCarPageStyles.formContainer}>
        <form onSubmit={handleSubmit} className={AddCarPageStyles.form}>
          <div className={AddCarPageStyles.formGrid}>
            {/* LEFT COLUMN */}
            <div className={AddCarPageStyles.formColumn}>
              {leftColumnFields.map((field) => {
                if (field.type === "input") {
                  return renderInputField(field.config);
                }
                if (field.type === "select") {
                  return renderSelectField(field.config);
                }
                return null;
              })}

              <div>
                <label className={AddCarPageStyles.label}>Transmission</label>
                <div className={AddCarPageStyles.radioContainer}>
                  {["Automatic", "Manual"].map((t) => (
                    <label
                      key={t}
                      className={AddCarPageStyles.radioLabel(
                        data.transmission === t
                      )}
                    >
                      <input
                        type="radio"
                        name="transmission"
                        value={t}
                        checked={data.transmission === t}
                        onChange={handleChange}
                        className={AddCarPageStyles.radioInput}
                      />
                      <span className={AddCarPageStyles.radioText}>{t}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className={AddCarPageStyles.formColumn}>
              <div className={AddCarPageStyles.formGridInner}>
                {rightColumnFields.map((field) =>
                  field.type === "input"
                    ? renderInputField(field.config)
                    : null
                )}
              </div>
            </div>

            <div>
              <label className={AddCarPageStyles.label}>Car Images</label>
              <div className={AddCarPageStyles.imageUploadContainer}>
                <label className={AddCarPageStyles.imageUploadLabel}>
                  {data.imagePreviews && data.imagePreviews.length > 0 ? (
                    <div className="w-full h-full rounded-xl overflow-hidden">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full h-full">
                        {data.imagePreviews.map((url, idx) => (
                          <img
                            key={idx}
                            src={url}
                            alt={`Preview ${idx + 1}`}
                            className="w-full h-28 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className={AddCarPageStyles.imageUploadPlaceholder}>
                      <svg
                        className={AddCarPageStyles.iconUpload}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <p className={AddCarPageStyles.imageUploadText}>
                        <span className={AddCarPageStyles.imageUploadTextSemibold}>
                          Click to upload
                        </span>
                        <br />
                        or drag and drop
                      </p>
                      <p className={AddCarPageStyles.imageUploadSubText}>
                        PNG, JPG up to 5MB (multiple files)
                      </p>
                    </div>
                  )}
                  <input
                    type="file"
                    ref={fileRef}
                    name="images"
                    onChange={handleImagesChange}
                    className="hidden"
                    accept="image/*"
                    multiple
                  />
                </label>
              </div>
            </div>

            <div>
              <label className={AddCarPageStyles.label}>Description</label>
              <textarea
                name="description"
                value={data.description}
                onChange={handleChange}
                rows="7"
                className={AddCarPageStyles.textarea}
                placeholder="Provide a brief description of the car."
              ></textarea>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <button type="submit" className={AddCarPageStyles.submitButton}>
              <span className={AddCarPageStyles.buttonText}>
                List Car
              </span>
              <svg
                className={AddCarPageStyles.iconInline}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
