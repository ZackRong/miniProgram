const apiBase = 'http://opv2-beta.zuolin.com/evh';

const callApi = ({ api = '', method = 'POST', data = {}, success, error, complete }) => {
  wx.request({
    url: `${apiBase}${api}`,
    method,
    data,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    success: (res) => {
      const { errorCode, errorDescription = '', response = {} } = res.data || {};
      if (Number(errorCode) === 200) {
        let bigNumber = response;
        if (JSON.stringify(bigNumber) !== '{}') {
          bigNumber = JSON.stringify(bigNumber);
          bigNumber = bigNumber.replace(/([^\\])":(\d{15,})/g, '$1":"$2"').replace(/([\\])":(\d{15,})/g, '$1":\\"$2\\"');
          bigNumber = JSON.parse(bigNumber);
        }
        success && success(bigNumber);
      } else {
        error && error({ errorCode, errorDescription });
      }
    },
    fail: () => {
      error && error();
    },
    complete: () => {
      complete && complete();
    }
  });
};

// module.exports = {
//   callApi
// };
export default callApi;


