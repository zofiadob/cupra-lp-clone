import React from 'react';
import './Form.css';
import CarSelect from './CarSelect';
import DataInput from './DataInput';
import Checkbox from './Checkbox';
import ContentButton from '../ContentButton/ContentButton';

export default function Form() {
    const inputs = [
        { name: "Imie", isObligatory: true },
        { name: "Nazwisko (opcjonalnie)", isObligatory: false },
        { name: "Adres e-mail", isObligatory: true },
        { name: "Nr. telefonu", isObligatory: true },
    ]

    const checkboxes = [
        "Zgadzam się na przetwarzanie moich danych osobowych przez Plichta spółka z ograniczoną odpowiedzialnością Spółka Komandytowa w celu przedstawienia mi informacji marketingowych i handlowych dotyczących produktów i usług marki CUPRA oraz innych powiązanych z marką CUPRA akcesoriów, produktów i usług motoryzacyjnych za pomocą:",
        "E-mail",
        "Telefon",
        "Wiadomość SMS/MMS"
    ]

    return (
        <div className='formContainer'>
            <div>
                <p className='upperText'>Jazda próbna</p>
                <p className='formHeader'>Umów się na bezpłatną jazdę próbną</p>
            </div>

            <div>
                <CarSelect />
            </div>
            <div className='inputs'>
                {inputs.map((item, index) => {
                    return (
                        <div key={index}>
                            <DataInput key={index} name={item.name} isObligatory={item.isObligatory} />
                        </div>
                    )
                })}
                <div className='obligatoryText'>
                    <p>* Pole wymagane</p>
                </div>
            </div>
            <div>
                <p>Wysłanie uzupełnionego formularza oznacza Twoją zgodę na kontakt w celu przedstawienia informacji handlowej w&nbsp;wybrany przez Ciebie sposób w związku <a>Czytaj więcej</a></p>
                <p>Prosimy Cię też o wyrażenie poniższych zgód w celu możliwości przedstawiania Ci atrakcyjnych ofert / promocji produktów, akcesoriów i usług marki CUPRA w przyszłości.</p>
            </div>
            <div>
                {checkboxes.map((text, index) => (<Checkbox key={index} text={text} />))}
            </div>
            <div>
                <p>Masz prawo do wglądu, modyfikacji, ograniczenia przetwarzania i usunięcia swoich danych oraz do wycofania w&nbsp;każdym momencie swojej zgody.
                </p>
                <p>Twoje dane będą przetwarzane tylko w stopniu umożliwiającym realizację wymienionego celu.</p>
                <p>Administratorem Twoich danych jest Plichta spółka z ograniczoną odpowiedzialnością Spółka Komandytowa,  z siedzibą w Wejherowie przy ulicy Gdańskiej 13c. Zapraszamy do zapoznania się z naszą polityką prywatności umieszczoną pod linkiem: <a>https://www.plichta.com.pl/polityka-prywatnosci</a></p>
            </div>
            <div className='formButton'>
                <ContentButton variant={"black"} text={"Umów jazdę próbną"} />
            </div>
        </div>
    )
}
