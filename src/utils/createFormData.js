export default function createFormData(files, fields) {
  const formData = new FormData();
  files.forEach((item) => {
    formData.append(fields, item);
  });
  return formData;
}
