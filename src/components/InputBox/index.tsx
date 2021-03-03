import { ChangeEvent, useState } from 'react';
import { ButtonInputBox, Container } from '../../styles/components/InputBox';

export default function InputBox() {
    // const inputRef = useRef<HTMLInputElement>();
    const [value, setValue] = useState('');
    const handleOnChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };
    return (
        <Container>
            <input
                type="text"
                placeholder="Digite seu username"
                onChange={handleOnChangeValue}
            />
            <ButtonInputBox hasValue={value.length > 0}>&#8594;</ButtonInputBox>
        </Container>
    );
}
