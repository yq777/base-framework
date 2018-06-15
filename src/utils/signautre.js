const userAgent = () => {
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    return 'IOS';
  } else if (/(Android)/i.test(navigator.userAgent)) {
    return 'Android';
  } else {
    return 'PC';
  }
};

const makeHeaderData = () => {

};

const coverData = () => {

};
export default {
  makeHeaderData,
  coverData
}
