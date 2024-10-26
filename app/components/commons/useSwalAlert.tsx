import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default class Toast {
    static async notify({ message, timer = 5000, icon = 'info' }: NotifyProps) {
        await MySwal.fire({
            html: message, // No title, just message
            icon,
            timer,
            timerProgressBar: true,
            showCloseButton: true,
            showConfirmButton: false, // Remove OK button
            toast: true,
            position: 'top-end',
            didOpen: (toast) => {
                const timerInterval = setInterval(() => {
                    const b: HTMLElement | null = toast.querySelector(
                        '.swal2-timer-progress-bar'
                    );
                    if (b) {
                        b.style.background =
                            'linear-gradient(90deg, #ff0000 0%, #00ff00 100%)'; // Progress bar gradient
                    }
                }, 100);

                // Pause timer when hovering over the toast
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);

                return () => clearInterval(timerInterval); // Cleanup interval
            },
        });
    }

    // using modal notification
    static async modalNotify({ title, message, icon }: ModalNotifyProps) {
        return await MySwal.fire({ title, icon, text: message });
    }

    // Modal notify for success
    static async modalNotifySuccess(
        message: string,
        title: string = 'Success!'
    ) {
        return await this.modalNotify({ title, message, icon: 'success' });
    }

    // Modal notify for error
    static async modalNotifyError(message: string, title: string = 'Error!') {
        return await this.modalNotify({ title, message, icon: 'error' });
    }

    // Modal notify for info
    static async modalNotifyInfo(message: string, title: string = 'Info.') {
        return await this.modalNotify({ title, message, icon: 'info' });
    }

    // Modal notify for warning
    static async modalNotifyWarning(
        message: string,
        title: string = 'Warning!'
    ) {
        return await this.modalNotify({ title, message, icon: 'warning' });
    }

    // Modal notify for warning
    static async modalNotifyQuestion(
        message: string,
        title: string = 'Wrong!'
    ) {
        return await this.modalNotify({ title, message, icon: 'question' });
    }

    static async permissionModalNotify() {
        const swalWithBootstrapButtons = MySwal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger',
            },
            buttonsStyling: false,
        });
        const result = await swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
        });
        // .then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
            });
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: 'Cancelled',
                text: 'Your imaginary file is safe :)',
                icon: 'error',
            });
        }
        // });
    }

    static async success(message: string, timer: number = 3000) {
        return await this.notify({ message, timer, icon: 'success' });
    }

    static async error(message: string, timer: number = 3000) {
        return await this.notify({ message, timer, icon: 'error' });
    }

    static async info(message: string, timer: number = 3000) {
        return await this.notify({ message, timer, icon: 'info' });
    }

    static async warning(message: string, timer: number = 3000) {
        return await this.notify({ message, timer, icon: 'info' });
    }
}

// interface ToastProps {
//     message: string;
//     timer?: number;
// }

interface NotifyProps {
    message: string;
    timer?: number;
    icon?: 'success' | 'error' | 'info' | 'warning';
}

interface ModalNotifyProps {
    message: string;
    title?: string;
    icon?: 'success' | 'error' | 'info' | 'warning' | 'question';
}

// export default Toast;

// // hooks/useToast.ts
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

// // Initialize SweetAlert2 with React Content
// const MySwal = withReactContent(Swal);

// interface ToastOptions {
//     title: string;
//     message: string;
//     timer?: number;
//     icon?: 'success' | 'error' | 'info' | 'warning';
// }

// const useSwalNotify = () => {
//     const notify = async ({
//         title,
//         message,
//         timer = 5000,
//         icon = 'info',
//     }: ToastOptions) =>
//         await MySwal.fire({
//             title: `<strong>${title}</strong>`,
//             html: message,
//             icon,
//             timer,
//             timerProgressBar: true,
//             showCloseButton: true,
//             toast: true,
//             position: 'top-end',
//             didOpen: (toast) => {
//                 const timerInterval = setInterval(() => {
//                     const b: HTMLElement | null = toast.querySelector(
//                         '.swal2-progress-bar'
//                     );
//                     if (b) {
//                         b.style.background =
//                             'linear-gradient(90deg, #ff0000 0%, #00ff00 100%)';
//                     }
//                 }, 100);

//                 toast.addEventListener('mouseenter', Swal.stopTimer);
//                 toast.addEventListener('mouseleave', Swal.resumeTimer);

//                 return () => clearInterval(timerInterval); // cleanup interval on unmount
//             },
//         });

//     const toast = {
//         async info({ title, message, timer = 5000 }: ToastOptions) {
//             return notify({ title, message, timer, icon: 'info' });
//         },
//     };

//     return { toast };
// };

// //  {
// // const showToast = useCallback(
// //     ({
// //         title,
// //         message,
// //         timer = 5000,
// //         icon = 'info',
// //     }: ToastOptions) => {
// //         MySwal.fire({
// //             title: `<strong>${title}</strong>`,
// //             html: message,
// //             icon,
// //             timer,
// //             timerProgressBar: true,
// //             showCloseButton: true,
// //             toast: true,
// //             position: 'top-end',
// //             didOpen: (toast) => {
// //                 const timerInterval = setInterval(() => {
// //                     const b: HTMLElement | null = toast.querySelector(
// //                         '.swal2-progress-bar'
// //                     );
// //                     if (b) {
// //                         b.style.background =
// //                             'linear-gradient(90deg, #ff0000 0%, #00ff00 100%)';
// //                     }
// //                 }, 100);

// //                 toast.addEventListener('mouseenter', Swal.stopTimer);
// //                 toast.addEventListener('mouseleave', Swal.resumeTimer);

// //                 return () => clearInterval(timerInterval); // cleanup interval on unmount
// //             },
// //         });
// //     },
// //     []
// // );

// //     return MySwal.fire({
// //         title: `<strong>${title}</strong>`,
// //         html: message,
// //         icon,
// //         timer,
// //         timerProgressBar: true,
// //         showCloseButton: true,
// //         toast: true,
// //         position: 'top-end',
// //         didOpen: (toast) => {
// //             const timerInterval = setInterval(() => {
// //                 const b: HTMLElement | null = toast.querySelector(
// //                     '.swal2-progress-bar'
// //                 );
// //                 if (b) {
// //                     b.style.background =
// //                         'linear-gradient(90deg, #ff0000 0%, #00ff00 100%)';
// //                 }
// //             }, 100);

// //             toast.addEventListener('mouseenter', Swal.stopTimer);
// //             toast.addEventListener('mouseleave', Swal.resumeTimer);

// //             return () => clearInterval(timerInterval); // cleanup interval on unmount
// //         },
// //     });
// // };

// export default useSwalNotify;
