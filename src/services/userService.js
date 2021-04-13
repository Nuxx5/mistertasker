export const userService = {
  addMove,
  getUser,
  signup,
  getLoggedinUser
}



const user =
  {
    "_id": "u101",
    "name": "Ochoa Hyde",
    "coins": 100,
    "moves": []
  }

function getUser() {
  const isLoggedinUser = getLoggedinUser()
  return (isLoggedinUser) ? isLoggedinUser : user
}

function sort(arr) {
  return arr.sort((a, b) => {
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
      return -1;
    }
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
      return 1;
    }

    return 0;
  })
}


function getEmptyUser() {
  return {
    name: '',
    email: '',
    phone: ''
  }
}

function addMove(contact, amount) {
  const user = getUser()
  user.moves.unshift({ _id: _makeId(), toId: contact._id, to: contact.name, date: Date.now(), amount})
  user.coins -= amount
  return _saveLocalUser(user)
  }


function signup(name) {
  user.name = name
  return _saveLocalUser(user)
}

function _saveLocalUser(user) {
  localStorage.setItem('loggedinUser', JSON.stringify(user))
  return user
}

function getLoggedinUser() {
  return JSON.parse(localStorage.getItem('loggedinUser'))
}



function _makeId(length = 10) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}