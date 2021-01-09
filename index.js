const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { getUser, setUser, updateUser, deleteUser } = require('./controller/user');

app.get('/user-authenticate', getUser);
app.post('/user-registration', setUser);
app.put('/user-update', updateUser);
app.delete('/user-delete', deleteUser);

const { getOrganization, setOrganization, updateOrganization, deleteOrganization } = require('./controller/organization');

app.get('/organization-authenticate', getOrganization);
app.post('/organization-registration', setOrganization);
app.put('/organization-update', updateOrganization);
app.delete('/organization-delete', deleteOrganization);

const { getLocks, setLocks, updateLocks, deleteLocks } = require('./controller/locks');

app.get('/locks-authenticate', getLocks);
app.post('/locks-registration', setLocks);
app.put('/locks-update', updateLocks);
app.delete('/locks-delete', deleteLocks);

app.listen(3000, () => console.log('Server rodando na porta 3000'));