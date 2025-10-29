"use client";

import { useState, FormEvent } from "react";
import styles from "./confirm-form.module.css";

interface PersonData {
  firstName: string;
  lastName: string;
  isConfirmed: boolean;
}

const ConfirmForm = () => {
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);
  const [people, setPeople] = useState<PersonData[]>([
    { firstName: "", lastName: "", isConfirmed: true },
  ]);

  const handleNumberChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const num = parseInt(e.target.value);
    setNumberOfPeople(num);

    const newPeople = Array(num)
      .fill(null)
      .map((_, index) => {
        return (
          people[index] || { firstName: "", lastName: "", isConfirmed: true }
        );
      });
    setPeople(newPeople);
  };

  const handlePersonChange = (
    index: number,
    field: keyof PersonData,
    value: string | boolean
  ) => {
    const newPeople = [...people];
    newPeople[index] = { ...newPeople[index], [field]: value };
    setPeople(newPeople);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const isValid = people.every(
      (person) =>
        person.firstName.trim() !== "" && person.lastName.trim() !== ""
    );

    if (!isValid) {
      alert("Por favor, completa todos los campos");
      return;
    }

    console.log("Datos del formulario:", people);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.select_container}>
        <label htmlFor="numberOfPeople">¿Cuántas personas confirmarán?</label>
        <select
          id="numberOfPeople"
          value={numberOfPeople}
          onChange={handleNumberChange}
          className={styles.select}
        >
          {[...Array(8)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} {i === 0 ? "persona" : "personas"}
            </option>
          ))}
        </select>
      </div>

      {people.map((person, index) => (
        <div key={index} className={styles.person_form}>
          <h3>Persona {index + 1}</h3>
          <div className={styles.input_group}>
            <input
              type="text"
              placeholder="Nombre"
              value={person.firstName}
              onChange={(e) =>
                handlePersonChange(index, "firstName", e.target.value)
              }
              className={styles.input}
              required
            />
          </div>
          <div className={styles.input_group}>
            <input
              type="text"
              placeholder="Apellido"
              value={person.lastName}
              onChange={(e) =>
                handlePersonChange(index, "lastName", e.target.value)
              }
              className={styles.input}
              required
            />
          </div>
          <div className={styles.radio_group}>
            <label>
              <input
                type="radio"
                name={`confirm-${index}`}
                checked={person.isConfirmed}
                onChange={() => handlePersonChange(index, "isConfirmed", true)}
              />
              Confirmo asistencia
            </label>
            <label>
              <input
                type="radio"
                name={`confirm-${index}`}
                checked={!person.isConfirmed}
                onChange={() => handlePersonChange(index, "isConfirmed", false)}
              />
              No podré asistir
            </label>
          </div>
        </div>
      ))}

      <button type="submit" className={styles.submit_button}>
        Confirmar
      </button>
    </form>
  );
};

export default ConfirmForm;
