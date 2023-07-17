---
name: New Frontend Feature
about: Help describe new features rapidly
title: ''
labels: ''
assignees: ''

---

# Creación del componente [Component name]

[Describe the component to be implemented]

[Add images of the expected results]

Example: 
## Diseños
<img width="371" alt="Normal" src="https://github.com/deii-ulpgc-tecnologia/deii-frontend/assets/30629957/42c6a081-2431-4e22-ac15-d304b4258602">
<img width="371" alt="Hover" src="https://github.com/deii-ulpgc-tecnologia/deii-frontend/assets/30629957/c73d9e0b-efbe-453a-a63c-d5395bd128f4">


## Enlace al Figma

[Add link to components design file in Figma]

Example: 
[Figma - Noticias](https://www.figma.com/file/z5w0rISAoNngeGPZ3QjOom/Noticias?type=design&node-id=1-6&mode=design&t=CqouutykCUKTNAxI-0)

## Realización de la tarea

[Describe briefly the task]

## Requisitos de validación

[List validation checks]

## Resolución de dudas y entrega de tareas

- Sube tu rama haciendo uso de `git push`
- Navega hasta la página del issue en GitHub.
- Agrega un comentario nuevo haciendo clic en el botón "Comment" (Comentar).
- Menciona al encargado del proyecto utilizando la sintaxis `@nombredeusuario` y adjunta tu **duda** o **solicitud de revisión**.
- Escribe cualquier mensaje adicional que desees transmitir al encargado del proyecto, explicando claramente que deseas que revise el issue.
- Haz clic en el botón "Comment" (Comentar) para publicar tu comentario.

## No sabes por dónde empezar?

### 1. Prepara el entorno de desarrollo. 

Utiliza la [guía de configuración](https://github.com/deii-ulpgc-tecnologia/documentation/blob/main/introductory-guides/setup-guide.md) para preparar el entorno de desarrollo si no lo has hecho ya. 

### 2. Clonar el repositorio de GitHub

Existen dos formas de descargar y subir cambios a github: HTTP y SSH. Nosotros recomendamos el uso de SSH y dejamos [aquí](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) una guía de cómo configurarlo. Si por el contrario decides utilzar HTTP necesitarás configurar un [token](https://docs.github.com/es/enterprise-cloud@latest/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) de github para poder subir tus cambios.  

Después de considerar esto puedes utilizar alguna de las dos siguientes órdenes para clonar (Crear una copia en tú máquina) del repositorio.

Si usas HTTP:
```
git clone https://github.com/deii-ulpgc-tecnologia/deii-frontend.git
```

Si tienes configurado el token SSH:
```
git clone git@github.com:deii-ulpgc-tecnologia/deii-frontend.git
```

### 3. Arrancar el entorno de desarrollo

Desde una terminal y dentro del proyecto, es conveniente que instales las dependencias del proyecto para que tu editor te pueda autocompletar código y encontrar errores haciendo uso del siguiente comando: 

```
npm install
```

Posteriormente es importante que arranques los distintos servicios que se utilizarán durante el desarrollo. Para ello basta con ejecutar la siguiente orden: 

```
docker compose up 
```

Esto inicializará 3 servicios distintos: 

**Página web de desarrollo**
- Localización: [localhost:3000](http://localhost:3000)
- Permite ver los cambios realizados en tiempo real sobre la página de la delegación.

**Storybook**
- Localización: [localhost:8008](http://localhost:8008)
- Permite ver los cambios realizados en tiempo real sobre un **componente en particular** además de cambiar los parámetros que recibe para asegurarse de que funciona adecuadamente.

**Base de datos de desarrollo**
- Localización: [localhost:8090/_/](http://localhost:8090/_/)
- Almacena información de ejemplo que se utilizará durante el desarrollo de la página. Puesto que cada desarrollador tiene su copia propia de esta base de datos y los cambios se revierten cada vez que se apaga el servicio te invitamos a que la modifiques como consideres apropiado. Para poder acceder necesitarás los siguientes credenciales:
    - email: dev@deii.com
    - pass: devpassword

Familiarizate con estos servicios que te serán de gran ayuda.

### 4. Cambiar a la branch del issue

Ahora que ya estás listo para empezar a trabajar es conveniente que te crees tu propia rama independiente dónde empezar a trabajar. Para ello basta con que ejecutes los siguientes comandos.

```
git checkout dev
git pull 
git checkout -b @feature/[nombre-del-componente]
```
