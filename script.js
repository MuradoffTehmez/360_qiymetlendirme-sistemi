// Dil dəyişikliyi funksionallığı
document
    .getElementById("language-select")
    .addEventListener("change", function () {
        const selectedLanguage = this.value;
        alert(`Seçilmiş dil: ${selectedLanguage}`);
        // Dil dəyişikliyi üçün əlavə əməliyyatlar
    });

// Giriş formu
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const fin = document.getElementById("fin").value;
    alert(`FİN kodu ilə daxil olunur: ${fin}`);
    // Giriş məntiqi üçün əlavə əməliyyatlar
});

// AsanLogin
document.getElementById("asan-login").addEventListener("click", function () {
    alert("AsanLogin ilə daxil olunur");
    // AsanLogin məntiqi üçün əlavə əməliyyatlar
});

// Sosial şəbəkə ilə giriş
document.getElementById("social-login").addEventListener("click", function () {
    alert("Sosial şəbəkə ilə daxil olunur");
    /* --------- Sosial şəbəkə ilə giriş məntiqi üçün əlavə əməliyyatlar -------- */
});

/* --------------------------- // Qeydiyyat formu --------------------------- */
document
    .getElementById("register-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        alert(`Qeydiyyat məlumatları: E-poçt - ${email}, Mobil nömrə - ${phone}`);
        /* -------------- // Qeydiyyat məntiqi üçən əlavə əməliyyatlar -------------- */
    });

// Bildirişlər
document
    .getElementById("notifications")
    .addEventListener("click", function (e) {
        e.preventDefault();
        alert("Bildirişlər bölməsinə keçid");
        // Bildirişlər məntiqi üçün əlavə əməliyyatlar
    });

// // DOM elementlərini seçirik
// document.addEventListener("DOMContentLoaded", function () {
//     // Bildiriş sistemi
//     const notificationSystem = {
//         notificationCount: document.querySelector(".notification-count"),
//         notificationIcon: document.querySelector(".notification-icon"),
//         notifications: [],

//         init() {
//             this.loadNotifications();
//             this.setupEventListeners();
//             this.updateNotificationCount();
//         },

//         loadNotifications() {
//             // Burada backend-dən bildirişləri yükləyə bilərsiniz
//             // Nümunə məlumatlar
//             this.notifications = [
//                 { id: 1, message: "Yeni qiymətləndirmə gözləyir", read: false },
//                 { id: 2, message: "Hesabat hazırdır", read: false },
//                 { id: 3, message: "Profil yenilənməsi tələb olunur", read: false },
//             ];
//         },

//         setupEventListeners() {
//             this.notificationIcon.addEventListener("click", () => {
//                 this.showNotifications();
//             });
//         },

//         updateNotificationCount() {
//             const unreadCount = this.notifications.filter((n) => !n.read).length;
//             this.notificationCount.textContent = unreadCount;

//             if (unreadCount === 0) {
//                 this.notificationCount.style.display = "none";
//             } else {
//                 this.notificationCount.style.display = "block";
//             }
//         },

//         showNotifications() {
//             const notificationList = document.createElement("div");
//             notificationList.className = "notification-dropdown";

//             this.notifications.forEach((notification) => {
//                 const notificationItem = document.createElement("div");
//                 notificationItem.className = `notification-item ${notification.read ? "read" : "unread"
//                     }`;
//                 notificationItem.textContent = notification.message;

//                 notificationItem.addEventListener("click", () => {
//                     this.markAsRead(notification.id);
//                 });

//                 notificationList.appendChild(notificationItem);
//             });

//             // Mövcud bildiriş pəncərəsini bağlayırıq
//             const existingDropdown = document.querySelector(".notification-dropdown");
//             if (existingDropdown) {
//                 existingDropdown.remove();
//             }

//             this.notificationIcon.parentElement.appendChild(notificationList);
//         },

//         markAsRead(id) {
//             const notification = this.notifications.find((n) => n.id === id);
//             if (notification) {
//                 notification.read = true;
//                 this.updateNotificationCount();
//             }
//         },
//     };

//     // Qiymətləndirmə forması
//     const evaluationForm = {
//         form: document.querySelector(".evaluation-form form"),

//         init() {
//             if (this.form) {
//                 this.setupFormValidation();
//                 this.setupAutoSave();
//             }
//         },

//         setupFormValidation() {
//             this.form.addEventListener("submit", (e) => {
//                 e.preventDefault();
//                 if (this.validateForm()) {
//                     this.submitForm();
//                 }
//             });
//         },

//         validateForm() {
//             let isValid = true;
//             const employee = this.form.querySelector("#employee");
//             const ratings = this.form.querySelectorAll('input[type="radio"]:checked');
//             const comments = this.form.querySelector("#comments");

//             // İşçi seçimi yoxlanışı
//             if (!employee.value) {
//                 this.showError(employee, "İşçi seçilməlidir");
//                 isValid = false;
//             }

//             // Qiymətləndirmə yoxlanışı
//             if (ratings.length === 0) {
//                 this.showError(
//                     document.querySelector(".rating-group"),
//                     "Ən azı bir qiymətləndirmə seçilməlidir"
//                 );
//                 isValid = false;
//             }

//             // Şərhlərin yoxlanışı
//             if (comments.value.trim().length < 10) {
//                 this.showError(comments, "Şərh ən azı 10 simvol olmalıdır");
//                 isValid = false;
//             }

//             return isValid;
//         },

//         showError(element, message) {
//             const errorDiv = document.createElement("div");
//             errorDiv.className = "error-message";
//             errorDiv.textContent = message;

//             const existingError =
//                 element.parentElement.querySelector(".error-message");
//             if (existingError) {
//                 existingError.remove();
//             }

//             element.parentElement.appendChild(errorDiv);

//             // 3 saniyə sonra xəta mesajını silir
//             setTimeout(() => {
//                 errorDiv.remove();
//             }, 3000);
//         },

//         setupAutoSave() {
//             let timeout;
//             const formInputs = this.form.querySelectorAll("input, select, textarea");

//             formInputs.forEach((input) => {
//                 input.addEventListener("change", () => {
//                     clearTimeout(timeout);
//                     timeout = setTimeout(() => {
//                         this.saveFormData();
//                     }, 1000);
//                 });
//             });
//         },

//         saveFormData() {
//             const formData = new FormData(this.form);
//             const data = Object.fromEntries(formData.entries());

//             // LocalStorage-də saxlayırıq
//             localStorage.setItem("evaluationFormData", JSON.stringify(data));
//         },

//         loadSavedData() {
//             const savedData = localStorage.getItem("evaluationFormData");
//             if (savedData) {
//                 const data = JSON.parse(savedData);

//                 // Formanı doldururuq
//                 Object.entries(data).forEach(([key, value]) => {
//                     const input = this.form.querySelector(`[name="${key}"]`);
//                     if (input) {
//                         if (input.type === "radio") {
//                             const radio = this.form.querySelector(
//                                 `[name="${key}"][value="${value}"]`
//                             );
//                             if (radio) radio.checked = true;
//                         } else {
//                             input.value = value;
//                         }
//                     }
//                 });
//             }
//         },

//         async submitForm() {
//             const formData = new FormData(this.form);
//             const data = Object.fromEntries(formData.entries());

//             try {
//                 // API sorğusu göndəririk
//                 const response = await fetch("/api/evaluations", {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(data),
//                 });

//                 if (response.ok) {
//                     this.showSuccess("Qiymətləndirmə uğurla göndərildi");
//                     this.form.reset();
//                     localStorage.removeItem("evaluationFormData");
//                 } else {
//                     throw new Error("Xəta baş verdi");
//                 }
//             } catch (error) {
//                 this.showError(
//                     this.form,
//                     "Qiymətləndirmə göndərilə bilmədi. Xahiş edirik yenidən cəhd edin."
//                 );
//             }
//         },

//         showSuccess(message) {
//             const successDiv = document.createElement("div");
//             successDiv.className = "success-message";
//             successDiv.textContent = message;

//             this.form.insertBefore(successDiv, this.form.firstChild);

//             setTimeout(() => {
//                 successDiv.remove();
//             }, 3000);
//         },
//     };

//     // Statistika kartları
//     const statsCards = {
//         init() {
//             this.loadStats();
//             this.setupRefreshInterval();
//         },

//         async loadStats() {
//             try {
//                 // API-dən statistikanı yükləyirik
//                 // const response = await fetch('/api/stats');
//                 // const data = await response.json();

//                 // Nümunə məlumatlar
//                 const data = {
//                     overallRating: 85,
//                     completedTasks: 12,
//                     totalTasks: 15,
//                     nextEvaluation: "2024-03-15",
//                 };

//                 this.updateStatsDisplay(data);
//             } catch (error) {
//                 console.error("Statistika yüklənə bilmədi:", error);
//             }
//         },

//         updateStatsDisplay(data) {
//             const overallRating = document.querySelector(".stat-number");
//             const completedTasks = document.querySelectorAll(".stat-number")[1];
//             const nextEvaluation = document.querySelector(".stat-date");

//             if (overallRating) {
//                 overallRating.textContent = `${data.overallRating}%`;
//             }

//             if (completedTasks) {
//                 completedTasks.textContent = `${data.completedTasks}/${data.totalTasks}`;
//             }

//             if (nextEvaluation) {
//                 const date = new Date(data.nextEvaluation);
//                 nextEvaluation.textContent = date.toLocaleDateString("az-AZ", {
//                     year: "numeric",
//                     month: "long",
//                     day: "numeric",
//                 });
//             }
//         },

//         setupRefreshInterval() {
//             // Hər 5 dəqiqədən bir statistikanı yeniləyirik
//             setInterval(() => {
//                 this.loadStats();
//             }, 5 * 60 * 1000);
//         },
//     };

//     // Sistemləri işə salırıq
//     notificationSystem.init();
//     evaluationForm.init();
//     statsCards.init();
// });

// // İstifadəçi profilini idarə edən kod
// const userProfile = {
//     async loadUserData() {
//         try {
//             // API-dən istifadəçi məlumatlarını yükləyirik
//             // const response = await fetch('/api/user/profile');
//             // const userData = await response.json();

//             // Nümunə məlumatlar
//             const userData = {
//                 name: "İstifadəçi Adı",
//                 avatar: "/avatar.png",
//                 role: "Department Head",
//             };

//             this.updateProfileDisplay(userData);
//         } catch (error) {
//             console.error("İstifadəçi məlumatları yüklənə bilmədi:", error);
//         }
//     },

//     updateProfileDisplay(userData) {
//         const userNameElement = document.querySelector(".username");
//         const userAvatarElement = document.querySelector(".user-profile img");

//         if (userNameElement) {
//             userNameElement.textContent = userData.name;
//         }

//         if (userAvatarElement) {
//             userAvatarElement.src = userData.avatar;
//             userAvatarElement.alt = `${userData.name} avatar`;
//         }
//     },
// };

// // Səhifə yüklənəndə istifadəçi profilini yükləyirik
// document.addEventListener("DOMContentLoaded", () => {
//     userProfile.loadUserData();
// });

// // Qlobal xəta idarəetməsi
// window.addEventListener("error", function (event) {
//     console.error("Qlobal xəta:", event.error);
//     // Burada xətaları izləmə sistemine göndərə bilərsiniz
// });

// // Şəbəkə vəziyyətini izləyirik
// window.addEventListener("online", function () {
//     console.log("İnternet əlaqəsi bərpa edildi");
//     // İnternet bağlantısı bərpa edildikdə yenidən sinxronizasiya
//     notificationSystem.loadNotifications();
//     statsCards.loadStats();
// });

// window.addEventListener("offline", function () {
//     console.log("İnternet əlaqəsi kəsildi");
//     // İstifadəçiyə bildiriş göstərə bilərsiniz
// });
