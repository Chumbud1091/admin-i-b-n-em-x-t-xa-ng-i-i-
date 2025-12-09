import React, {
  useEffect,
  useCallback,
  useMemo,
  useState,
  useRef,
} from "react";
import {
  FaCar,
  FaCog,
  FaEdit,
  FaFilter,
  FaGasPump,
  FaTachometerAlt,
  FaTrash,
  FaUser,
  FaTimes,
} from "react-icons/fa";
import { styles } from "../../assets/dummyStyles";
import { toast } from "react-toastify";
import client from "../../../services/client";

const ADMIN_LIMIT = 12;

const buildSafeCar = (raw = {}, idx = 0) => {
  const _id = raw._id || raw.id || null;
  const images = Array.isArray(raw.images)
    ? raw.images
    : raw.image
      ? [raw.image]
      : [];

  return {
    _id,
    id: _id || raw.id || raw.localId || `local-${idx + 1}`,
    make: raw.make || "",
    model: raw.model || "",
    year: raw.year ?? "",
    price: raw.price ?? 0,
    color: raw.color || "",
    category: raw.category || "Sedan",
    seats: raw.seats ?? 4,
    transmission: raw.transmission || "Automatic",
    fuelType: raw.fuelType || "Gasoline",
    engine: raw.engine || "",
    horsepower: raw.horsepower ?? "",
    description: raw.description || "",
    images,
    image: images[0] || "",
  };
};

const StatCard = ({ title, value, icon: Icon, className = "" }) => (
  <div
    className={`${styles.gradientOrange} ${styles.rounded2xl} ${styles.statCard} 
    ${styles.borderGray} ${styles.borderHoverOrange} ${className}`}
  >
    <div className="flex items-start justify-between">
      <div>
        <h3 className={`${styles.textGray} text-sm font-medium mb-2`}>
          {title}
        </h3>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>

      <div className="p-3 rounded-lg bg-gray-800/30">
        <Icon className={`${styles.textOrange} text-xl`} />
      </div>
    </div>
  </div>
);

const CarCard = ({ car, onEdit, onDelete }) => {
  return (
    <div
      className={`${styles.gradientGray} ${styles.rounded2xl} ${styles.carCard} 
      ${styles.borderGray} ${styles.borderHoverOrange}`}
    >
      <div className="relative">
        <img
          src={car.images?.[0]}
          alt={`${car.make} ${car.model}`}
          className={styles.carImage}
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">
              {car.make} {car.model}
            </h3>
            <p className={styles.textGray}>{car.year}</p>
          </div>

          <div className="text-2xl font-bold text-orange-500">
            ${Number(car.price || 0).toLocaleString()}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="flex items-center text-sm">
            <FaGasPump className={`${styles.textOrange} mr-2`} />
            <span className={styles.textGray300}>{car.fuelType}</span>
          </div>

          <div className="flex items-center text-sm">
            <FaTachometerAlt className={`${styles.textOrange} mr-2`} />
            <span className={styles.textGray300}>
              {car.horsepower ? `${car.horsepower} HP` : "—"}
            </span>
          </div>

          <div className="flex items-center text-sm">
            <FaUser className={`${styles.textOrange} mr-2`} />
            <span className={styles.textGray300}>{car.seats} seats</span>
          </div>

          <div className="flex items-center text-sm">
            <FaCog className={`${styles.textOrange} mr-2`} />
            <span className={styles.textGray300}>{car.transmission}</span>
          </div>
        </div>

        <div className="flex justify-between border-t border-gray-800 pt-4">
          <button
            onClick={() => onEdit(car)}
            className={`flex items-center ${styles.textOrange} hover:text-orange-300 transition-colors`}
          >
            <FaEdit className="mr-1" /> Edit
          </button>
          <button
            onClick={() => onDelete(car._id ?? car.id)}
            className={`flex items-center ${styles.textRed} hover:text-red-300 transition-colors`}
          >
            <FaTrash className="mr-1" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const EditModal = ({ car, onClose, onSubmit, onChange }) => {
  const mapToBackend = (c) => ({
    _id: c._id,
    make: c.make,
    model: c.model,
    year: Number(c.year),
    price: Number(c.price),
    color: c.color,
    category: c.category,
    seats: Number(c.seats),
    transmission: c.transmission,
    fuelType: c.fuelType,
    engine: c.engine,
    horsepower: c.horsepower === "" ? "" : Number(c.horsepower),
    description: c.description,
    images:
      Array.isArray(c.images) && c.images.length
        ? c.images
        : c.image
          ? [c.image]
          : [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!car?.make || !car?.model)
      return toast.error("Make and Model are required.");
    onSubmit(mapToBackend(car));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    onChange({
      ...car,
      [name]: ["year", "price", "seats", "horsepower"].includes(name)
        ? value === ""
          ? ""
          : Number(value)
        : value,
    });
  };

  const inputField = (label, name, type = "text", options = {}) => (
    <div>
      <label className={`block ${styles.textGray} text-sm mb-1`}>
        {label}
      </label>
      {type === "select" ? (
        <select
          name={name}
          value={car[name] || ""}
          onChange={handleInputChange}
          className={styles.inputField}
          required={options.required}
        >
          {options.items?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          value={car[name] || ""}
          onChange={handleInputChange}
          className={`${styles.inputField} min-h-[80px]`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={car[name] ?? ""}
          onChange={handleInputChange}
          className={styles.inputField}
          required={options.required}
          min={options.min}
          max={options.max}
          step={options.step}
        />
      )}
    </div>
  );

  return (
    <div className={styles.modalOverlay}>
      <div
        className={`${styles.gradientGrayToGray} ${styles.rounded2xl} ${styles.modalContainer} ${styles.borderOrange}`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center border-b border-orange-800/30 pb-4">
            <h2 className="text-2xl font-bold text-white">
              {car._id ? `Edit: ${car.make} ${car.model}` : "Add New Car"}
            </h2>
            <button onClick={onClose} className={styles.textGray}>
              <FaTimes className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inputField("Make", "make", "text", { required: true })}
              {inputField("Model", "model", "text", { required: true })}
              {inputField("Year", "year", "number", {
                required: true,
                min: 1900,
                max: 2099,
              })}
              {inputField("Price", "price", "number", {
                required: true,
                min: 0,
              })}
              {inputField("Color", "color", "text")}
              {inputField("Category", "category", "select", {
                required: true,
                items: [
                  "Sedan",
                  "SUV",
                  "Sports",
                  "Coupe",
                  "Hatchback",
                  "Luxury",
                ],
              })}
              {inputField("Transmission", "transmission", "select", {
                required: true,
                items: ["Automatic", "Manual", "CVT"],
              })}
              {inputField("Fuel Type", "fuelType", "select", {
                required: true,
                items: ["Gasoline", "Diesel", "Hybrid", "Electric"],
              })}
              {inputField("Number of Seats", "seats", "number", {
                required: true,
                min: 1,
                max: 12,
              })}
              {inputField("Engine", "engine", "text")}
              {inputField("Horsepower", "horsepower", "number", {
                min: 0,
              })}
            </div>

            {inputField("Description", "description", "textarea")}

            {car.images?.[0] && (
              <div className="flex justify-center">
                <img
                  src={car.images[0]}
                  alt="preview"
                  className="h-40 object-contain rounded-md border border-orange-800/30"
                />
              </div>
            )}

            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className={styles.buttonSecondary}
              >
                Cancel
              </button>
              <button type="submit" className={styles.buttonPrimary}>
                {car._id ? "Save Changes" : "Add Car"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const NoCarsView = ({ onResetFilter }) => (
  <div className={`${styles.gradientGray} ${styles.noCarsContainer}`}>
    <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-orange-900/30 to-amber-900/30 flex items-center justify-center mb-6">
      <div className="bg-gradient-to-br from-orange-700 to-amber-700 w-16 h-16 flex rounded-full justify-center items-center">
        <FaCar className="h-8 w-8 text-orange-300" />
      </div>
    </div>

    <h3 className="mt-4 text-xl font-medium text-white">No cars found</h3>
    <p className="mt-2 text-gray-400">Try adjusting your filter criteria</p>

    <button onClick={onResetFilter} className={`${styles.buttonPrimary} mt-4`}>
      Show All Cars
    </button>
  </div>
);

const FilterSelect = ({ value, onChange, categories }) => (
  <div
    className={`${styles.gradientGray} ${styles.rounded2xl} ${styles.filterSelect} ${styles.borderGray} ${styles.borderHoverOrange}`}
  >
    <label className={`block text-sm font-medium ${styles.textGray} mb-2`}>
      Filter by Category
    </label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${styles.inputField} pl-8 focus:outline-none focus:ring-2 focus:ring-orange-500`}
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c === "all" ? "All Categories" : c}
          </option>
        ))}
      </select>
      <div className="absolute left-2 top-3.5 text-orange-500 pointer-events-none">
        <FaFilter />
      </div>
    </div>
  </div>
);

const ManageCar = () => {
  const [cars, setCars] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [editingCar, setEditingCar] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);

  const abortRef = useRef(null);

  const fetchCars = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      abortRef.current?.abort();
    } catch { }

    const ctrl = new AbortController();
    abortRef.current = ctrl;

    try {
      const res = await client.get("/admin/cars", {
        params: {
          page,
          limit: ADMIN_LIMIT,
          category: categoryFilter === "all" ? undefined : categoryFilter,
        },
        signal: ctrl.signal,
      });

      const {
        page: apiPage,
        pages: apiPages,
        total: apiTotal,
        cars: apiCars,
      } = res.data || {};
      console.log("Fetched admin cars raw:", res);
      console.log("Fetched admin cars payload:", res.data);
      console.log("Fetched admin cars list:", apiCars);
      const safeCars = (apiCars || []).map((c, i) => buildSafeCar(c, i));

      setCars(safeCars);
      setPage(apiPage || 1);
      setPages(apiPages || 1);
      setTotal(apiTotal || (apiCars ? apiCars.length : 0));
    } catch (err) {
      console.error("Error fetching admin cars:", err);
      const msg =
        err?.response?.data?.message || err.message || "Failed to fetch cars";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }, [page, categoryFilter]);

  useEffect(() => {
    fetchCars();

    return () => {
      try {
        abortRef.current?.abort();
      } catch { }
    };
  }, [fetchCars]);

  const categories = useMemo(
    () => [
      "all",
      ...Array.from(new Set(cars.map((c) => c.category || "Sedan"))),
    ],
    [cars]
  );

  const filteredCars = useMemo(
    () =>
      cars.filter(
        (c) => categoryFilter === "all" || c.category === categoryFilter
      ),
    [cars, categoryFilter]
  );

  const handleDelete = async (identifier) => {
    const target = cars.find((c) => c._id === identifier || c.id === identifier);
    if (!target) return toast.error("Car not found");
    if (!window.confirm("Are you sure you want to delete this car?")) return;

    try {
      if (!target._id) {
        setCars((prev) => prev.filter((p) => p.id !== target.id));
        toast.success("Car removed locally.");
        return;
      }
      await client.delete(`/admin/cars/${target._id}`);
      toast.success("Car deleted");
      fetchCars();
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to delete car");
    }
  };

  const openEdit = (car) => {
    setEditingCar({
      ...car,
      images: Array.isArray(car.images)
        ? car.images
        : car.image
          ? [car.image]
          : [],
      image: car.image || (Array.isArray(car.images) ? car.images[0] : ""),
      _id: car._id ?? null,
    });
    setShowEditModal(true);
  };

  const handleEditSubmit = async (payload) => {
    try {
      const { _id, ...data } = payload;

      await client.put(`/admin/cars/${_id}`, data);

      toast.success("Car updated");
      fetchCars();
      setShowEditModal(false);
      setEditingCar(null);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to update car");
    }
  };

  const handleResetFilter = () => {
    setCategoryFilter("all");
    setPage(1);
  };

  const handlePrevPage = () => setPage((p) => Math.max(1, p - 1));
  const handleNextPage = () => setPage((p) => Math.min(pages, p + 1));

  return (
    <div className="min-h-screen bg-gray-950 p-4 sm:p-6">
      <div className="relative mb-8 pt-16 text-center">
        <div className="absolute inset-x-0 top-0 flex justify-center">
          <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
        </div>

        <h1 className="text-4xl font-extrabold py-4 text-white sm:text-5xl mb-3 tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
            Car Management
          </span>
        </h1>
      </div>

      <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-5 mb-6 border border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <StatCard title="Total Cars" value={total} icon={FaCar} />

          <FilterSelect
            value={categoryFilter}
            onChange={(value) => {
              setCategoryFilter(value);
              setPage(1);
            }}
            categories={categories}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading && (
          <div className="col-span-full text-center text-gray-300">
            Loading cars...
          </div>
        )}

        {!loading && error && (
          <div className="col-span-full text-center text-red-400">
            {error}
          </div>
        )}

        {!loading &&
          !error &&
          filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onEdit={openEdit}
              onDelete={handleDelete}
            />
          ))}
      </div>

      {!loading && !error && filteredCars.length === 0 && (
        <NoCarsView onResetFilter={handleResetFilter} />
      )}

      {/* Pagination giống bên Cars.jsx */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-sm text-gray-300">
          Total:{" "}
          <span className="font-semibold">
            {total?.toLocaleString?.() || total} cars
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrevPage}
            disabled={page <= 1 || loading}
            className={`px-3 py-1.5 rounded-lg text-sm ${page <= 1 || loading
                ? "bg-white/5 text-gray-500 cursor-not-allowed"
                : "bg-white/10 text-gray-100 hover:bg-white/20"
              } transition`}
          >
            Prev
          </button>
          <span className="text-sm text-gray-200">
            Page <span className="font-semibold">{page}</span> of{" "}
            <span className="font-semibold">{pages}</span>
          </span>
          <button
            onClick={handleNextPage}
            disabled={page >= pages || loading}
            className={`px-3 py-1.5 rounded-lg text-sm ${page >= pages || loading
                ? "bg-white/5 text-gray-500 cursor-not-allowed"
                : "bg-white/10 text-gray-100 hover:bg-white/20"
              } transition`}
          >
            Next
          </button>
        </div>
      </div>

      {showEditModal && editingCar && (
        <EditModal
          car={editingCar}
          onClose={() => {
            setShowEditModal(false);
            setEditingCar(null);
          }}
          onSubmit={handleEditSubmit}
          onChange={setEditingCar}
        />
      )}
    </div>
  );
};

export default ManageCar;
