import {useState} from 'react';
import {addContact} from '../../redux/contacts/contactsAction';
import {v4} from 'uuid';
import {useSelector, useDispatch} from 'react-redux';
import s from './ContactForm.module.css';

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contacts.items);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const reset = () => {
        setName('');
        setNumber('');
    };
    const findByName = (e) => {
        setName(e.currentTarget.value);
    };
    const findByNumber = (e) => {
        setNumber(e.currentTarget.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            contacts.some((item) => {
                return item.name.toLowerCase() === name.toLowerCase();
            })
        ) {
            alert(`${name} is already in contacts`);
            return;
        }

        const contact = {
            id: v4(),
            name: name,
            number: number,
        };
        dispatch(addContact(contact));
        reset();
    };

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <label>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов."
                    required
                    value={name}
                    onChange={findByName}
                />
            </label>
            <label>
                Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={number}
                    onChange={findByNumber}
                />
            </label>
            <button type="submit">Add contact</button>
        </form>
    );
};

export default ContactForm;