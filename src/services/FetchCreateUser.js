import * as constants from "../constants/Constants";

export const FetchCreateUser = async (email, password, username, first_name, last_name) => {
  try {
    const url = `${constants.appLocalBaseUrl}/register/`;
    console.log(username)
    console.log(password)
    console.log(email)
    console.log(first_name)
    console.log(last_name)

    var formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("email", email);
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);

    let response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    alert("faile at FetchCreateUser Service");
  }
};
