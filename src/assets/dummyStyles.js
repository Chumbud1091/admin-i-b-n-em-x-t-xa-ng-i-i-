export const styles = {
  // Common gradient backgrounds
  gradientOrange: "bg-gradient-to-br from-orange-900/30 to-amber-900/30",
  gradientGray: "bg-gradient-to-br from-gray-900/50 to-gray-900/30",
  gradientGrayToGray: "bg-gradient-to-br from-gray-900 to-gray-800",
  
  // Common borders and transitions
  borderGray: "border border-gray-800",
  borderHoverOrange: "hover:border-orange-500/50 transition-all",
  borderOrange: "border border-orange-800/50",
  
  // Common rounded corners
  rounded2xl: "rounded-2xl",
  roundedXl: "rounded-xl",
  roundedLg: "rounded-lg",
  roundedFull: "rounded-full",
  
  // Common text colors
  textWhite: "text-white",
  textGray: "text-gray-400",
  textGray300: "text-gray-300",
  textOrange: "text-orange-400",
  textRed: "text-red-400",
  
  // Common button styles
  buttonPrimary: "px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white",
  buttonSecondary: "bg-gray-800/50 border border-gray-700 px-5 py-2.5 text-gray-300 rounded-xl",
  
  // Common input styles
  inputField: "bg-gray-800/50 border border-gray-700 w-full px-4 py-2.5 text-gray-200 rounded-lg",
  
  // Component-specific styles
  statCard: "p-5 w-full max-w-xs",
  carCard: "overflow-hidden duration-300",
  carImage: "w-full h-48 object-cover",
  statusBadge: "px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full",
  modalOverlay: "fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50",
  modalContainer: "shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
  noCarsContainer: "text-center py-16 rounded-2xl border border-gray-800 mt-8",
  filterSelect: "p-5 w-full max-w-xs"
};


// src/assets/dummyStyles.js
export const bookStyles = {
  // Common gradient backgrounds
  gradientOrange: "bg-gradient-to-br from-orange-900/30 to-amber-900/30",
  gradientGray: "bg-gradient-to-br from-gray-900/50 to-gray-900/30",
  gradientGrayToGray: "bg-gradient-to-br from-gray-900 to-gray-800",
  gradientGrayToGrayLight: "bg-gradient-to-br from-gray-900/30 to-gray-900/10",
  gradientOrangeToAmber: "bg-gradient-to-br from-orange-800/50 to-amber-800/50",
  gradientOrangeToAmberSolid: "bg-gradient-to-br from-orange-700 to-amber-700",
  
  // Common borders and transitions
  borderGray: "border border-gray-800",
  borderHoverOrange: "hover:border-orange-500/50 transition-all",
  borderOrange: "border border-orange-800/30",
  borderOrangeLight: "border border-orange-800/50",
  
  // Common rounded corners
  rounded2xl: "rounded-2xl",
  roundedXl: "rounded-xl",
  roundedLg: "rounded-lg",
  roundedFull: "rounded-full",
  
  // Common text colors
  textWhite: "text-white",
  textGray: "text-gray-400",
  textGray300: "text-gray-300",
  textOrange: "text-orange-400",
  textRed: "text-red-400",
  textGreen: "text-green-400",
  textAmber: "text-amber-400",
  
  // Common button styles
  buttonPrimary: "px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white",
  buttonSecondary: "bg-gray-800/50 border border-gray-700 px-5 py-2.5 text-gray-300 rounded-xl",
  buttonSuccess: "bg-gradient-to-r from-green-700/50 to-green-800/50 text-green-300 hover:text-white transition-colors text-sm px-3 py-1 rounded-lg",
  buttonCancel: "bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-gray-400 hover:text-gray-200 text-sm px-3 py-1 rounded-lg",
  buttonEdit: "bg-gradient-to-r from-orange-700/50 to-amber-700/50 text-orange-300 hover:text-white text-sm px-3 py-1 rounded-lg",
  
  // Common input styles
  inputField: "bg-gray-800/50 border border-gray-700 w-full px-4 py-2.5 text-gray-200 rounded-lg",
  inputFieldWithIcon: "bg-gray-800/50 border border-gray-700 w-full px-4 py-2.5 pl-10 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
  
  // Status styles
  statusCompleted: "bg-green-900/20 text-green-400",
  statusPending: "bg-amber-900/20 text-amber-400",
  statusActive: "bg-orange-900/20 text-orange-400",
  statusCancelled: "bg-red-900/20 text-red-400",
  statusDefault: "bg-gray-900/30 text-gray-400",
  
  // Component-specific styles
  statCard: "p-5 w-full max-w-xs",
  carCard: "overflow-hidden duration-300",
  carImage: "w-full h-48 object-cover",
  statusBadge: "px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full",
  modalOverlay: "fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50",
  modalContainer: "shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
  noItemsContainer: "text-center py-16 rounded-2xl border border-gray-800",
  filterSelect: "p-5 w-full max-w-xs",
  panel: "bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800",
  specItem: "flex flex-col items-center p-3 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all",
  detailItem: "flex items-start",
  bookingCard: "backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-300",
  searchFilterBar: "backdrop-blur-sm rounded-2xl p-5 mb-6 border border-gray-800"
};


// src/assets/dummyStyles.js
export const AddCarPageStyles = {
  // Page background and layout
  pageContainer: "min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-6",
  fixedBackground: "fixed inset-0 overflow-hidden pointer-events-none",
  gradientBlob1: "absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-orange-600 to-orange-800 blur-3xl opacity-10",
  gradientBlob2: "absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-gradient-to-r from-amber-600 to-amber-800 blur-3xl opacity-10",
  gradientBlob3: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rotate-45 bg-gradient-to-r from-orange-500 to-amber-500 blur-xl opacity-10",

  // Header
  headerContainer: "relative mb-8 pt-20 text-center",
  headerDivider: "absolute inset-x-0 top-0 flex justify-center",
  title: "text-4xl font-extrabold py-4 text-white sm:text-5xl mb-3 tracking-wide",
  titleGradient: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400",
  subtitle: "text-lg text-gray-400 max-w-2xl mx-auto",

  // Form
  formContainer: "max-w-4xl mx-auto",
  form: "glass-card rounded-2xl shadow-xl p-6 sm:p-10 relative overflow-hidden border border-gray-700",
  formGrid: "grid grid-cols-1 lg:grid-cols-2 gap-8",
  formColumn: "space-y-6",
  formGridInner: "grid grid-cols-1 sm:grid-cols-2 gap-4",

  // Inputs and labels
  label: "block text-sm font-medium text-gray-300 mb-2",
  labelWithIcon: "block text-sm font-medium text-gray-300 mb-2 flex items-center",
  input: "glass-input w-full px-4 py-3 rounded-xl text-gray-200 shadow-sm focus:ring-2 focus:ring-orange-500 transition-all",
  inputWithPrefix: "glass-input w-full pl-8 pr-4 py-3 rounded-xl text-gray-200 shadow-sm focus:ring-2 focus:ring-orange-500 transition-all",
  select: "bg-gray-800/50 border border-gray-700 w-full px-4 py-3 rounded-xl text-gray-200 focus:ring-2 focus:ring-orange-500",
  textarea: "glass-input w-full px-4 py-3 rounded-xl text-gray-200 shadow-sm focus:ring-2 focus:ring-orange-500 transition-all",

  // Radio buttons
  radioContainer: "flex space-x-4",
  radioLabel: (isSelected) => 
    `flex-1 flex items-center justify-center p-3 rounded-xl cursor-pointer transition-all hover:shadow-md ${
      isSelected
        ? "bg-gradient-to-r from-orange-700/30 to-amber-700/30 border border-orange-500/50"
        : "glass-input"
    }`,
  radioInput: "h-4 w-4 text-orange-500 focus:ring-orange-500",
  radioText: "ml-2 text-gray-300",

  // Image upload
  imageUploadContainer: "flex items-center justify-center w-full",
  imageUploadLabel: "flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-600 rounded-2xl cursor-pointer glass-input shadow-sm hover:bg-gray-900/30 transition-all",
  imageUploadPlaceholder: "flex flex-col items-center justify-center pt-5 pb-6",
  imageUploadIcon: "w-10 h-10 mb-3 text-gray-500",
  imageUploadText: "text-sm text-gray-400 text-center",
  imageUploadTextSemibold: "font-semibold",
  imageUploadSubText: "text-xs text-gray-500 mt-1",

  // Button
  submitButton: "px-10 py-4 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50 text-lg bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500",
  buttonText: "drop-shadow-md",

  // Icons
  iconSmall: "w-5 h-5 mr-2 text-orange-500",
  iconMedium: "w-6 h-6 mr-2 text-red-400",
  iconLarge: "w-8 h-8 mr-3 text-orange-400",
  iconInline: "w-5 h-5 ml-2 inline",
  iconUpload: "w-10 h-10 mb-3 text-gray-500",
};

// Success and error toast styles
export const toastStyles = {
  success: {
    container: "bg-gradient-to-r from-gray-800 to-gray-900 border-l-4 border-orange-500",
    body: "font-sans text-gray-100",
  },
  error: {
    container: "bg-gradient-to-r from-gray-800 to-gray-900",
    body: "font-sans text-gray-100",
  },
};


// Add to src/assets/dummyStyles.js
export const BookingPageStyles = {
  // Page background and layout
  pageContainer: "min-h-screen bg-gray-950 p-4 sm:p-6",
  fixedBackground: "fixed inset-0 overflow-hidden pointer-events-none",
  gradientBlob1: "absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-orange-600 to-orange-800 blur-3xl opacity-10",
  gradientBlob2: "absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-gradient-to-r from-amber-600 to-amber-800 blur-3xl opacity-10",
  gradientBlob3: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rotate-45 bg-gradient-to-r from-orange-500 to-amber-500 blur-xl opacity-10",

  // Header
  headerContainer: "relative mb-8 pt-16 text-center",
  headerDivider: "absolute inset-x-0 top-0 flex justify-center",
  headerDividerLine: "h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full",
  title: "text-4xl font-extrabold py-4 text-white sm:text-5xl mb-3 tracking-wide",
  titleGradient: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400",
  subtitle: "text-gray-400 max-w-2xl mx-auto",

  // Search and Filter
  searchFilterContainer: "bg-gray-900/50 backdrop-blur-sm rounded-2xl p-5 mb-6 border border-gray-800",
  searchFilterGrid: "grid grid-cols-1 md:grid-cols-3 gap-4",
  filterLabel: "block text-sm font-medium text-gray-400 mb-2",
  filterInput: "bg-gray-800/50 border border-gray-700 w-full px-4 py-2.5 pl-10 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
  filterIconContainer: "absolute left-3 top-3 text-orange-500",
  totalBookingsContainer: "bg-gradient-to-br from-orange-900/30 to-amber-900/30 rounded-lg p-4 border border-orange-800/30 flex items-center justify-center",
  totalBookingsLabel: "text-gray-400 text-sm mb-1",
  totalBookingsValue: "text-2xl font-bold text-orange-400",

  // Booking Card
  bookingCard: "bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition-all duration-300",
  bookingCardHeader: "flex items-center mb-4 md:mb-0",
  bookingIconContainer: "bg-gradient-to-br from-orange-800/50 to-amber-800/50 p-3 rounded-xl mr-4",
  bookingIcon: "text-orange-400 text-xl",
  bookingCustomer: "text-lg font-bold text-white",
  bookingEmail: "text-sm text-gray-400",
  bookingExpandIcon: "flex items-center text-orange-400 ml-auto md:hidden",
  bookingInfoGrid: "grid grid-cols-2 sm:grid-cols-4 gap-4",
  bookingInfoLabel: "text-xs text-gray-400",
  bookingInfoValue: "text-sm font-medium text-white",
  bookingAmount: "text-sm font-semibold text-orange-400",
  bookingActions: "flex justify-between items-center mt-4",
  bookingActionButton: (color) => `bg-gradient-to-r from-${color}-700/50 to-${color}-800/50 text-${color}-300 hover:text-white transition-colors text-sm px-3 py-1 rounded-lg`,
  bookingEditButton: "bg-gradient-to-r from-orange-700/50 to-amber-700/50 text-orange-300 hover:text-white text-sm px-3 py-1 rounded-lg flex items-center",
  bookingDetails: "border-t border-gray-800 p-5 bg-gradient-to-br from-gray-900/30 to-gray-900/10",
  bookingDetailsGrid: "grid grid-cols-1 md:grid-cols-2 gap-6",

  // Panel
  panel: "bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800",
  panelTitle: "text-md font-bold text-white mb-4 flex items-center",
  panelIcon: "mr-2 text-orange-400",

  // Detail
  detailContainer: "flex items-start",
  detailIcon: "text-orange-400 mt-1 mr-3",
  detailLabel: "text-xs text-gray-400",
  detailValue: "text-sm font-medium text-white",

  // Spec
  specContainer: "flex flex-col items-center bg-gradient-to-br from-gray-900/30 to-gray-900/10 p-3 rounded-xl border border-gray-800 hover:border-orange-500/50 transition-all",
  specIcon: "text-xl mb-2 text-orange-400",
  specLabel: "text-xs text-gray-400",
  specValue: "font-semibold text-sm text-white",

  // Status
  statusIndicator: (status) => {
    const config = {
      completed: "bg-green-900/20 text-green-400",
      pending: "bg-amber-900/20 text-amber-400",
      active: "bg-orange-900/20 text-orange-400",
      cancelled: "bg-red-900/20 text-red-400",
      default: "bg-gray-900/30 text-gray-400"
    };
    return `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${config[status] || config.default}`;
  },
  statusIcon: (status) => {
    const config = {
      completed: "bg-green-500",
      pending: "bg-amber-500",
      active: "bg-orange-500",
      cancelled: "bg-red-500",
      default: "bg-gray-500"
    };
    return `w-2 h-2 rounded-full mr-2 ${config[status] || config.default}`;
  },

  // No Bookings
  noBookingsContainer: "bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm text-center py-16 rounded-2xl border border-gray-800",
  noBookingsIconContainer: "mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-orange-900/30 to-amber-900/30 flex items-center justify-center mb-6",
  noBookingsIcon: "bg-gradient-to-br from-orange-700 to-amber-700 w-16 h-16 rounded-full flex items-center justify-center",
  noBookingsIconSvg: "h-8 w-8 text-orange-300",
  noBookingsTitle: "mt-4 text-xl font-medium text-white",
  noBookingsText: "mt-2 text-gray-400",
  noBookingsButton: "mt-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white flex items-center mx-auto",

  // Car Image
  carImageContainer: "bg-gradient-to-br from-orange-900/30 to-amber-900/30 rounded-xl w-20 h-12 flex items-center justify-center",
};

export const statusConfig = {
  completed: { bg: "bg-green-900/20", text: "text-green-400" },
  pending: { bg: "bg-amber-900/20", text: "text-amber-400" },
  active: { bg: "bg-orange-900/20", text: "text-orange-400" },
  cancelled: { bg: "bg-red-900/20", text: "text-red-400" },
  default: { bg: "bg-gray-900/30", text: "text-gray-400" }
};

// src/assets/dummyStyles.js (add these styles to the existing file)
export const navbarStyles = {
  // Navbar container
  navbar: (scrolled) => `fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`,
  
  // Navbar inner container
  navbarInner: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  navbarCenter: "flex justify-center",
  
  // Navbar background
  navbarBackground: (scrolled) => `bg-white backdrop-blur-lg w-full rounded-full shadow-lg border border-gray-200 transition-all duration-300 ${scrolled ? "py-2 px-6" : "py-3 px-8"}`,
  
  // Content container
  contentContainer: "flex justify-between items-center h-full",
  
  // Logo
  logoLink: "flex items-center",
  logoContainer: "flex flex-col items-center text-xl md:text-2xl lg:text-2xl leading-none",
  logoImage: "h-[1em] w-auto block",
  logoText: "font-bold tracking-wider font-[pacifico] text-gray-900 mt-1",
  
  // Desktop navigation
  desktopNav: "hidden lg:flex items-center",
  navLinksContainer: "flex space-x-1 mx-6",
  navLink: "flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300",
  navDivider: "h-5 w-px bg-gray-300 my-auto",
  
  // Mobile menu button
  mobileMenuButton: "lg:hidden flex items-center",
  menuButton: "text-gray-700 hover:text-blue-600 focus:outline-none",
  
  // Mobile menu
  mobileMenu: "lg:hidden bg-white border-t border-gray-200 shadow-lg mt-1",
  mobileMenuContainer: "px-4 pt-2 pb-8 space-y-1",
  mobileNavLink: "block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-3",
};

export const loginStyles = {
  pageContainer: "min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 sm:px-6 md:px-8 text-white",
  
  animatedBackground: {
    base: "absolute inset-0 z-0 overflow-hidden",
    orb1: "absolute top-1/4 left-1/5 rounded-full blur-3xl transition-all duration-1000 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-r from-orange-400/10 to-orange-600/10",
    orb2: "absolute top-3/4 right-1/4 rounded-full blur-3xl transition-all duration-1000 w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 bg-gradient-to-r from-orange-300/10 to-orange-500/10",
    orb3: "absolute bottom-1/3 left-2/3 rounded-full blur-3xl transition-all duration-1000 w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-r from-orange-200/10 to-orange-400/10"
  },
  
  backButton: "absolute top-3 left-6 z-10 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-full transition-shadow duration-300 shadow-lg hover:shadow-xl bg-white/5 text-white hover:bg-white/10",
  
  loginCard: {
    container: "w-full max-w-md sm:mt-14 z-10 transform transition-all duration-500 hover:scale-[1.02]",
    card: "relative overflow-hidden p-6 sm:p-8 rounded-3xl shadow-2xl transition-colors duration-500 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
    decor1: "absolute -top-8 -right-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-orange-400/10 to-orange-500/10 blur-2xl z-0",
    decor2: "absolute -bottom-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-orange-300/10 to-orange-400/10 blur-2xl z-0",
    headerContainer: "relative z-10 text-center mb-6 sm:mb-8",
    logoContainer: "mx-auto mb-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center",
    logoText: "flex flex-col items-center text-xl md:text-2xl lg:text-2xl leading-none font-bold tracking-wider text-white",
    title: "text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-orange-300 to-white bg-clip-text text-transparent",
    subtitle: "mt-1 sm:mt-2 font-light tracking-wider text-xs sm:text-sm text-orange-300/60"
  },
  
  form: {
    container: "space-y-4 sm:space-y-6",
    inputContainer: "relative z-10",
    inputWrapper: "relative",
    inputBlur:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-orange-300",
    inputIcon: "absolute inset-y-0 left-0 pl-3 z-1 flex items-center pointer-events-none text-orange-300",
    input: "w-full pl-10 pr-3 py-3 sm:py-4 rounded-xl text-sm sm:text-base placeholder-opacity-70 border transition duration-300 focus:outline-none focus:ring-2 focus:border-transparent bg-white/5 backdrop-blur-sm text-white/90 placeholder-orange-200/40 border-white/10 focus:ring-orange-500/70",
    passwordToggle: "absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer transition-colors text-orange-300/80 hover:text-orange-200/90",
    submitButton: "w-full py-3 sm:py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 relative overflow-hidden group bg-gradient-to-r from-orange-500/90 to-orange-600/90 text-white/95 hover:from-orange-600/90 hover:to-orange-700/90 focus:ring-orange-500/70",
    buttonText: "relative cursor-pointer z-10 text-sm sm:text-base",
    buttonHover: "absolute inset-0 transition-opacity duration-300 z-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-orange-400/50 to-orange-500/50"
  },
  
  signupSection: "mt-6 pt-6 border-t border-white/10 text-center text-xs sm:text-sm",
  signupText: "text-orange-200/70",
  signupButton: "inline-block mt-2 w-full cursor-pointer px-4 py-2 rounded-xl font-medium transition-transform duration-300 transform hover:-translate-y-0.5 bg-transparent border border-orange-500/50 text-orange-300/90 hover:bg-orange-500/10 hover:text-white/90"
};


// assets/dummyStyles.js
export const signupStyles = {
  pageContainer: "min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-500 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white",
  
  animatedBackground: {
    base: "absolute inset-0 z-0 overflow-hidden",
    orb1: "absolute top-[10%] sm:top-1/4 left-[5%] sm:left-1/5 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full transition-all duration-1000 bg-gradient-to-r from-orange-200/10 to-orange-400/10 blur-3xl",
    orb2: "absolute top-[75%] sm:top-3/4 right-[5%] sm:right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full transition-all duration-1000 bg-gradient-to-r from-orange-200/8 to-orange-300/8 blur-3xl",
    orb3: "absolute bottom-[15%] sm:bottom-1/3 left-[65%] sm:left-2/3 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full transition-all duration-1000 bg-gradient-to-r from-orange-100/8 to-orange-300/10 blur-3xl"
  },
  
  backButton: "absolute top-4 sm:top-6 left-4 sm:left-6 z-10 flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl bg-white/5 text-white hover:bg-white/10",
  
  signupCard: {
    container: "w-full max-w-[90%] sm:max-w-md py-5 sm:py-7 mt-9 z-10 transform transition-all duration-500 hover:scale-[1.02] px-2 sm:px-4",
    card: "rounded-3xl shadow-2xl overflow-hidden p-4 sm:p-6 md:p-8 relative transition-all duration-500 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700",
    decor1: "absolute -top-6 sm:-top-8 -right-6 sm:-right-8 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-orange-300/10 to-orange-400/10 blur-2xl z-0",
    decor2: "absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-orange-200/8 to-orange-300/10 blur-2xl z-0",
    headerContainer: "relative z-10 text-center mb-6 sm:mb-8",
    logoContainer: "mx-auto mb-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center",
    logoText: "flex flex-col items-center text-xl md:text-2xl lg:text-2xl leading-none",
    title: "text-2xl sm:text-3xl md:text-4xl font-bold mt-2 sm:mt-3 md:mt-4 tracking-tight bg-gradient-to-r from-orange-300 to-white bg-clip-text text-transparent",
    subtitle: "mt-1 sm:mt-2 text-xs sm:text-sm md:text-base font-light tracking-wider text-orange-300/60"
  },
  
  form: {
    container: "space-y-3 sm:space-y-4 md:space-y-5",
    inputContainer: "relative z-10",
    inputWrapper: "relative",
    inputBlur:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-orange-300",
    inputIcon: "absolute inset-y-0 left-0 pl-3 z-1 flex items-center pointer-events-none text-orange-300",
    input: "w-full pl-10 pr-3 py-2 sm:py-3 md:py-4 rounded-xl text-xs sm:text-sm placeholder-opacity-70 border focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 bg-white/5 backdrop-blur-sm text-white/90 placeholder-orange-200/40 border-white/10 focus:ring-orange-500/70",
    passwordToggle: "absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer transition-colors text-orange-300/80 hover:text-orange-200/90",
    checkbox: "h-4 w-4 sm:h-5 sm:w-5 rounded focus:ring-0 border text-orange-600 border-gray-500 bg-gray-700/30 checked:bg-orange-500/80",
    checkboxLabel: "ml-2 sm:ml-3 text-xs sm:text-sm text-orange-200/80 cursor-pointer select-none",
    checkboxLink: "font-medium text-orange-300 hover:underline",
    submitButton: "w-full py-2 sm:py-3 md:py-4 font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 relative overflow-hidden group bg-gradient-to-r from-orange-500/90 to-orange-600/90 text-white/95 hover:from-orange-600/90 hover:to-orange-700/90 focus:ring-orange-500/70 rounded-[16px] shadow-[0_8px_16px_rgba(0,0,0,0.2)]",
    buttonText: "relative z-10 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base",
    buttonHover: "absolute inset-0 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 bg-gradient-to-r from-orange-400/50 to-orange-500/50"
  },
  
  signinSection: "mt-2 pt-2 sm:pt-3 border-t text-center",
  signinText: "mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base text-orange-200/70 text-center",
  signinButton: "inline-block w-full px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-0.5 text-xs sm:text-sm md:text-base bg-transparent border border-orange-500/50 text-orange-300/90 hover:bg-orange-500/10 hover:text-white/90 text-center"
};