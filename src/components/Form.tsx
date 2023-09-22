import React from 'react'

const Form = () => {
    return (
        <div>

            <form action="" role='form-element'>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' id='name' />
                </div>
                <div>
                    <label htmlFor="bia">About you</label>
                    <textarea name="" id=""></textarea>
                </div>
                <div>
                    <label htmlFor="job-location">Job Location</label>
                    <select name="job-location" id="">
                        <option value="">selct a state</option>
                        <option value="Abj">Abuja</option>
                        <option value="Edo">Edo</option>
                        <option value="Abi">Abia</option>
                        <option value="ogu">Ogun</option>
                        <option value="ada">Adamawa</option>
                    </select>
                </div>
                <div>

                    <label htmlFor="condition">Agree to terms and conditions</label>
                    <input type="checkbox" name="conditon" id="" />
                </div>
                <div>
                    <button>Click me</button>
                </div>
            </form>
        </div>
    )
}

export default Form