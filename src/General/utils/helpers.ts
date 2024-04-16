export const handleError = (e: any, callback: (message: string) => void) => {
  let message;

  if (e.response) {
    const res = e?.response.data.message;

    if (typeof res === 'string') {
      message = res;
    } else {
      message = res[0];
    }
  } else {
    message = e.message;
  }

  callback(message);
};
