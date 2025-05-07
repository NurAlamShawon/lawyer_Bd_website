import Swal from "sweetalert2";



const showAlert = () => {
  Swal.fire({
    title: "<strong>You have already booked appointment of this lawyer</strong>",
    icon: "info",
    html: `You can book other lawyer`,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
      `,
  });

};



const getlawyers = () => {
  const storedlawyerdata = localStorage.getItem("lawyer");
  if (storedlawyerdata) {
    const lawyerdata = JSON.parse(storedlawyerdata);
    return lawyerdata;
  }
  return [];
};

const savelawyerlocalstorage = (lawyer) => {
  const bookconvert = JSON.stringify(lawyer);
  localStorage.setItem("lawyer", bookconvert);
};

const setlawyers = (lawyer) => {
  const lawyers = getlawyers();

  if (lawyers.includes(lawyer)) {
    showAlert();
  } else {
    const newlawyers = [...lawyers, lawyer];
    savelawyerlocalstorage(newlawyers);
  }
};

const removelawyer = (id) => {
  const lawyers = getlawyers();
  const remaininglawyers = lawyers.filter((lawyer) => lawyer !== id);
  savelawyerlocalstorage(remaininglawyers);
};











export { getlawyers, setlawyers, removelawyer };
