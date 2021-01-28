<template>
  <div
    class="min-h-screen min-w-full bg-gray-150 flex flex-col justify-center p-10"
  >
    <div
      class="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto"
    >
      <div
        class="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"
      ></div>
      <div class="relative bg-white shadow-lg sm:rounded-3xl">
        <div class="flex items-center justify-start pt-6 pl-6">
          <span class="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
          <span class="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
          <span class="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
        </div>

        <div class="px-20 pt-8 pb-11">
          <div class="font-mono">
            <!-- Container -->
            <div
              class="min-w-screen bg-gray-150 flex items-center justify-center px-5 py-3"
            >
              <div
                class="rounded-3xl shadow-xl w-full overflow-hidden"
                style="max-width:1000px"
              >
                <!-- Row -->
                <div class="md:flex w-full">
                  <!-- Col -->
                  <div
                    class="py-10 px-10 w-1/2 md:block bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                    style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"
                  ></div>
                  <!-- Col -->
                  <div
                    class="w-full md:w-7/12 bg-gray-100 py-6 px-5 md:px-10 rounded-lg lg:rounded-l-none"
                  >
                    <h3 class="pt-4 text-2xl text-center">
                      Create an Account!
                    </h3>
                    <form class="px-8 pt-6 pb-8 mb-4 bg-gray-100 rounded">
                      <div class="mb-4 md:flex md:justify-between">
                        <div class="mb-4 md:mr-2 md:mb-0">
                          <label
                            class="block mb-2 text-sm font-bold text-gray-700"
                            for="firstName"
                          >
                            First Name
                          </label>
                          <input
                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                          />
                        </div>
                        <div class="md:ml-2">
                          <label
                            class="block mb-2 text-sm font-bold text-gray-700"
                            for="lastName"
                          >
                            Last Name
                          </label>
                          <input
                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div class="mb-4">
                        <label
                          class="block mb-2 text-sm font-bold text-gray-700"
                          for="email"
                        >
                          Email
                        </label>
                        <input
                          class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="email"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                      <div class="mb-4 md:flex md:justify-between">
                        <div class="mb-4 md:mr-2 md:mb-0">
                          <label
                            class="block mb-2 text-sm font-bold text-gray-700"
                            for="password"
                          >
                            Password
                          </label>
                          <input
                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                          />
                          <p class="text-xs italic text-red-500">
                            Please choose a password.
                          </p>
                        </div>
                        <div class="md:ml-2">
                          <label
                            class="block mb-2 text-sm font-bold text-gray-700"
                            for="c_password"
                          >
                            Confirm Password
                          </label>
                          <input
                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="c_password"
                            type="password"
                            placeholder="******************"
                          />
                        </div>
                      </div>
                      <div class="mb-6 text-center">
                        <button
                          class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          Register Account
                        </button>
                      </div>
                      <hr class="mb-6 border-t" />
                      <div class="text-center">
                        <router-link
                          class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                          to="/reset"
                        >
                          Forgot Password?
                        </router-link>
                      </div>
                      <div class="text-center">
                        <router-link
                          class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                          to="/login"
                        >
                          Already have an account? Login!
                        </router-link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
