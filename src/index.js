import vinDecoder from 'vin-decode'

export default function (str = '') {
  const parts = str.split('%')

  let data = {
    status: parts[4] || '',
    controlNumber: parts[5] || '',
    vehicleRegistrationNumber: parts[6] || '',
    licenseNumber: parts[7] || '',
    description: parts[8] || '',
    make: parts[9] || '',
    model: parts[10] || '',
    color: parts[11] || '',
    vin: parts[12] || '',
    engineNumber: parts[13] || '',
    expiryDate: parts[14] || ''
  }

  if (data.vin) {
    data = { ...data, ...vinDecoder(data.vin).decode() }
  }

  return data
}
