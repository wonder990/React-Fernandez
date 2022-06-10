import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { useCartContext } from "../../contexts/CartContext";

const FormCart = (props) => {
  const { clear } = useCartContext();

  const submitForm = () => {
    props.form();
    clear();
  };

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [home, setHome] = useState("");
  const [phone, setPhone] = useState("");

  const saveUser = () => {
    const user = {
      name: name,
      surname: surname,
      email: email,
      home: home,
      phone: phone,
    };
    console.log(user);

    const itemsUser = {
      buyer: user,
      items: props.cart,
      total: props.precio(),
    };
    console.log(itemsUser);
    saveToFirestore(itemsUser);
    submitForm();
  };

  const saveToFirestore = (itemsUser) => {
    const db = getFirestore();
    const itemsCollection = collection(db, "itemsUser");
    addDoc(itemsCollection, itemsUser).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className=" bg-black/[.8] top-0 absolute min-h-screen flex items-center justify-center w-full">
      <div className="duration-500 relative w-[90%] lg:w-[400px] bg-slate-800 flex flex-col justify-center">
        <i
          onClick={props.form}
          className="top-[15px] text-white right-[15px] absolute fa-solid fa-xmark"
        ></i>
        <form className="flex flex-col w-[350px] mx-auto pt-[30px] pb-[50px] px-[20px] lg:px-[20px]">
          <label htmlFor="nombre" className="text-white py-4">
            Nombre
          </label>
          <input
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="nombre"
            className="outline-0 h-[30px] pl-2"
            type="text"
            id="nombre"
            placeholder="Ingrese su nombre"
          />
          <label htmlFor="apellido" className="text-white py-4">
            Apellido
          </label>
          <input
            required
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
            name="apellido"
            className="outline-0 h-[30px] pl-2"
            type="text"
            id="apellido"
            placeholder="Ingrese su apellido"
          />
          <label htmlFor="email" className="text-white py-4">
            Email
          </label>
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            className="outline-0 h-[30px] pl-2"
            type="email"
            id="email"
            placeholder="holaMundo@gmail.com"
          />
          <label htmlFor="Domicilio" className="text-white py-4">
            Direccion de domicilio
          </label>
          <input
            required
            onChange={(e) => setHome(e.target.value)}
            value={home}
            name="domicilio"
            className="outline-0 h-[30px] pl-2"
            type="text"
            id="Domicilio"
          />
          <label htmlFor="Numero" className="text-white py-4">
            Numero de celular
          </label>
          <input
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            name="celular"
            className="outline-0 h-[30px] pl-2"
            type="number"
            id="Numero"
            placeholder="6515465138"
          />
        </form>
        <button
          className="m-auto text-white w-[80px] h-[35px] bg-slate-500 text-center my-[25px]"
          onClick={saveUser}
          type="submit"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default FormCart;
