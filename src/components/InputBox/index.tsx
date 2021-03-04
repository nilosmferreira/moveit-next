import { ChangeEvent, useRef, useState } from 'react';
import { ButtonInputBox, Container } from '../../styles/components/InputBox';
import Input from './Input';

export default function InputBox() {
    const [value, setValue] = useState('');
    const handleOnChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };
    return (
        <Container>
            <Input
                name="userId"
                type="text"
                placeholder="Digite seu username"
                onChange={handleOnChangeValue}
            />
            <ButtonInputBox type="submit" hasValue={value.length > 0}>
                &#8594;
            </ButtonInputBox>
        </Container>
    );
}
