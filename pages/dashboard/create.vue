<template>
  <div class="project-page">
    <section class="dashboard-header pt-5">
      <div class="container mx-auto relative">
        <header class="flex items-center">
          <div style="height: 54px" class="pr-5">
            <img src="/logo.svg" alt="logo" class="h-full" />
          </div>
          <ul class="flex items-center">
            <li>
              <a
                  class="text-white hover:text-teal-500 text-lg px-4 py-3"
                  href="/"
              >Home</a
              >
            </li>
            <li>
              <a
                  class="text-white hover:text-teal-500 text-lg px-4 py-3"
                  href="/pricing"
              >Project</a
              >
            </li>
            <li>
              <a
                  class="text-white hover:text-teal-500 text-lg px-4 py-3"
                  href="/features"
              >Features</a
              >
            </li>
            <li>
              <a
                  class="text-white hover:text-teal-500 text-lg px-4 py-3"
                  href="/story"
              >Success Stories</a
              >
            </li>
          </ul>
          <ul class="flex ml-auto items-center mt-2">
            <li>
              <a
                  href="/register"
                  class="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full mr-4"
              >
                Sign Up
              </a>
            </li>
            <li>
              <a
                  href="/login"
                  class="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full"
              >
                My Account
              </a>
            </li>
          </ul>
        </header>
      </div>
    </section>
    <section class="container mx-auto pt-8">
      <div class="flex justify-between items-center">
        <div class="w-full mr-6">
          <h2 class="text-4xl text-gray-900 mb-2 font-medium">Dashboard</h2>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="w-3/4 mr-6">
          <h3 class="text-2xl text-gray-900 mb-4">Create New Projects</h3>
        </div>
        <div class="w-1/4 text-right">
          <nuxt-link
              to="/dashboard/detail"
              class="bg-green-button hover:bg-green-button text-white font-bold px-4 py-1 rounded inline-flex items-center"
          >
            Save
          </nuxt-link>
        </div>
      </div>
      <div class="block mb-2">
        <div class="w-full lg:max-w-full lg:flex mb-4">
          <div
              class="w-full border border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal"
          >
            <form class="w-full">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Campaign Name
                  </label>
                  <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Contoh: Demi Gunpla Demi Istri"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Price
                  </label>
                  <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="number"
                      placeholder="Contoh: 200000"
                  />
                </div>
                <div class="w-full px-3">
                  <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3"
                  >
                    Short Description
                  </label>
                  <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Deskripsi singkat mengenai projectmu"
                  />
                </div>
                <div class="w-full px-3">
                  <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    What will backers get
                  </label>
                  <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Contoh: Ayam, Nasi Goreng, Piring"
                  />
                </div>
                <div class="w-full px-3">
                  <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Description
                  </label>
                  <textarea
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Isi deskripsi panjang untuk projectmu"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div class="cta-clip -mt-20"></div>
    <CallToAction/>
    <Footer/>
  </div>
</template>