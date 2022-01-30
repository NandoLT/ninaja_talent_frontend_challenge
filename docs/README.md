**CODE CHALLENGE - DETALLES-**

REQUERIMIENTOS:
- Servicio RESTfull para conexión a backend:<br>
    - /Services/api/users/usersData.js:
        - Archivo donde se recogen llamadas a los diferentes endpoints de la api. En este caso una única llamada a getUsers.<br>
        usersData.js hace uso de client.js via importación ya que en este archivo tenemos las operaciones necesarias con Axios para realizar las peticiones y usamos 'interceptors' para interceptar la respuesta. En caso de ir todo bien me pasa el response.data directamente al componente que realiza la petición. Así como los errores en caso de que algo haya ido mal. De esta forma no tenemos que aplicar la misma lógica en cada llamada.<br>
- Interfaz para listar y ver detalle de usuario:<br>
    - /components/users:
        - UsersPage: Contiene el cuerpo de la página y es el padre del resto de componentes. También se encarga de hacer la llamada al backend para solicitar los usuarios y los pasa al siguiente componente.
        - UserList: Nos muestra el listado de usuario en caso de que nos lleguen en otro caso nos muestra el componente EmptyList para notificarnos que no tenenmos usuarios. <br>
        En la tabla nos muestra el id y nombre de usuario y nos da la opción de ampliar información de cada usaurio haciendo click en el icono del ojo. Momento en el que nos abre un modal con el resto de la informacion (último componente)
        - UserDetail: Es el componente que nos amplia la información del usuario. Gestiona su visibilidad recibiendo un booleano que condiciona la visibilidad o no del componente. También recibe la información del usuario en cuestión y una función que maneja el estado de la visibilidad para cambiar el booleano que le llega en primera instacia.

- Se hace uso de una serie de componentes de uso común /components/common que se podrían utilizar en la creación de diferentes páginas para la aplicación en este caso:
    - Header + Footer => Layout : Layout recive como prop un componente que se muestra en el cuerpo del Layout que está compuesto del Header y el Footer.
    - Loader: Animación de carga.

- Tests: 
    - Test para Servicios: Se comprueba que usersData.js nos devuelve un número de usuarios > 0.
    - Test para componentes: 
        - USerPage: Sólo se testea que se muestra el componente como esperamos.
        - UsersList: se comprueba que el componente se renderiza mostrando la tabla de usuarios cuando el array de usuarios es mayor que 0. En caso de que no sea así vemos que mostrara el componente EmptyList.
        - UserDetail: Sólo se testea que se muestra el componente como esperamos.

- Deploy: 
    - Desplegada en vercel: https://ninja-talent-frontend-challenge.vercel.app/