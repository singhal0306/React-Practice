import React, { useState } from "react";
import Card from '../UI/Card'
import style from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (age.trim().length === 0 || username.trim().length === 0) {
            setError({
                title: "Empty Values",
                message: "Please enter valid input name and age."
            })
            return;
        };
        if (+age < 1) {
            setError({
                title: "Invalid Age",
                message: "Please enter valid age (> 0)."
            })
            return;
        }
        // console.log(username, age);
        props.onAddUser(username, age);
        setAge('');
        setUsername('');
    }

    const usernameHandler = (event) => {
        setUsername(event.target.value)
    }

    const ageHandler = (event) => {
        setAge(event.target.value)
    }

    const errorHandler =() =>{
        setError(null);
    }
    return (
        <div>
            {error && <ErrorModal title = {error.title} message = {error.message} onConfirm= {errorHandler}/>}
            <Card className={style.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={usernameHandler} value={username} />

                    <label htmlFor="age">Age (Year)</label>
                    <input type="number" id="age" onChange={ageHandler} value={age} />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}
export default AddUser;