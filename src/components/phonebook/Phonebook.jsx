import { useState, useEffect } from "react";
import uniqid from "uniqid";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

function Phonebook() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (!Array.isArray(contacts)) {
      return;
    }
    if (contacts.length) {
      setContacts(contacts);
    }
  }, []);

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts.length !== contacts.length) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContact = (data) => {
    const contact = {
      ...data,
      id: uniqid.time()
    };
    if (haveContact(data)) {
      return alert(`${data.name} is already in contacts.`);
    }
    setContacts([...contacts, contact]);
  };

  const haveContact = (data) => {
    const name = contacts.some((contact) => contact.name === data.name);
    return name;
  };

  const handleChange = ({ target }) => {
    setFilter(target.value);
  };

  const getFilteredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
    return filteredContacts;
  };

  const deleteContact = (e) => {
    const newContacts = contacts.filter((contact) => contact.id !== e);
    setContacts(newContacts);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter onFilter={handleChange} value={filter} />
      <ContactList
        contacts={getFilteredContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default Phonebook;
