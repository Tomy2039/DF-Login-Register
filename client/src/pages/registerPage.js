import logo from '../Assets/Formosa-removebg-preview.png';
import register from '../Assets/unlock.svg';
import wave from '../Assets/wave.png';

export function registerPage() {
    const $container = document.createElement('div');
    
    $container.innerHTML = `
    <img
      src="${wave}"
      class="fixed hidden lg:block inset-0 h-full"
      style="z-index: -1;"
    />
    <div
      class="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2"
    >
      <img
        src="${register}"
        class="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto"
      />
      <form class="flex flex-col justify-center items-center w-1/2 mx-auto -translate-x-3">
        <img src="${logo}" class="w-3/4" />
        <h2
          class="my-8 font-display font-bold text-3xl text-gray-700 text-center"
        >
          Descubre Formosa
        </h2>
        <div class="relative">
          <i class="fa fa-user absolute text-primarycolor text-xl"></i>
          <input
            type="text"
            placeholder="Nombre de usuario"
            class="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
          />
        </div>
        <div class="relative mt-8">
          <i class="fa fa-lock absolute text-primarycolor text-xl"></i>
          <input
            type="password"
            placeholder="Contraseña"
            class="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
          />
        </div>
        <div class="relative mt-8">
          <i class="fa fa-envelope absolute text-primarycolor text-xl"></i>
          <input
            type="email"
            placeholder="Email"
            class="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
          />
        </div>
        <a
          href="#"
          class="py-3 px-20 bg-primarycolor rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500"
          >Sign Up</a
        >
      </form>
    </div>`;

    return $container;
}
