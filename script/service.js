
const API_PATH = 'https://reqres.in/api/users';


const getAllUsers = async () => {
    const tableBody = document.getElementById('bodyTableUsers');
    let rows = '';
    try {
        const response = await fetch(API_PATH);

        const { data } = await response.json();

        let count = 1;
        data.forEach((item) => {
            rows += `
            <tr>
                <th scope="row">${count}</th>
                <td><img src="${item.avatar}" class="rounded float-start" alt="..."></td>
                <td>${item.first_name} ${item.last_name}</td>
                <td>${item.email}</td>
            </tr>
            `;
            count++;

        })

    } catch (err) {

    }

    if (tableBody != null) {
        tableBody.innerHTML = rows;
    }

};

const registerUser = async () => {

    const nameValue = document.getElementById('nameInput').value;
    const jobValue = document.getElementById('jobValue').value;

    const dataRegister = {
        name: nameValue,
        job: jobValue
    }


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data : dataRegister })
    };


    try {
        const response = await fetch(API_PATH, requestOptions);
    } catch (err) {
        
    }


}
