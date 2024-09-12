const BASE_URL = process.env.REACT_APP_BASE_URL;

export default (n, p) => {
  console.log('Base URL:', process.env.REACT_APP_BASE_URL);

  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/user/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: n,
        password: p,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            reject(new Error(data.message || 'Login failed.'));
          });
        }
        return res.text;
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(new Error('Network error. Please try again later. '));
      });
  });
};
