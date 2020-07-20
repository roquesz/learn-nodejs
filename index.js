function getUser(callback)
{
    setTimeout(function()
    {
        return callback(null, {
            id: 1,
            name: 'Roque',
            birthday: new Date()
        });
    }, 1000);
}

function getPhone(userId, callback)
{
    setTimeout(function()
    {
        return callback(null, {
            number: '99999-9999',
            ddd: 81
        })
    }, 2000);
}

function getAddress(userId, callback)
{
    setTimeout(function()
    {
        return callback(null, {
            street: 'Street name',
            number: '2'
        })
    }, 2000);
}

getUser(function resolveUser(error, user)
{
    if (error) {
        console.error('Deu ruim');
        return;
    }

    getPhone(user.id, function resolvePhone(errorPhone, phone)
    {
        if (errorPhone) {
            console.error('Deu ruim no telefone');
            return;
        }
        getAddress(user.id, function resolverAddress(errorAddress, address)
        {
            if (errorAddress) {
                console.error('Deu ruim no Endereço');
                return;
            }
            console.log(`Name: ${user.name}\nAddress: ${address.street}, ${address.number}\nPhone: (${phone.ddd}) ${phone.number}`);
        });
    });


});