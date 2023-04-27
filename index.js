let nombre = 'friend'

window.addEventListener('load', async () => {

    const { value: password } = await Swal.fire({
        title: 'ingresa tu nombre/apodo',
        input: 'text',
        inputLabel: '(no mas de 6 letras porfavor)',
        inputPlaceholder: 'nombre',
        inputAttributes: {
          maxlength: 6,
          autocapitalize: 'off',
          autocorrect: 'off'
        }
      })
      nombre = password

      let usuario = document.getElementById('nombre_usuario')
        usuario.innerText = ` ${nombre} `
})

