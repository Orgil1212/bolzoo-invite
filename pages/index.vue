<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200 p-10 text-center overflow-hidden">
      <!-- ❤️ Floating hearts -->
      <div v-for="i in 10" :key="i" :class="`heart heart-${i}`">💖</div>
  
      <!-- 💌 Invitation card -->
      <div class="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl px-10 py-12 max-w-xl w-full transition-all duration-300 hover:scale-[1.01] z-10 relative">
        <h1 class="text-4xl font-bold mb-6 text-pink-700 animate-pulse">
          💌 Болзоонд урьж байна — чи зөвшөөрч байна уу?
        </h1>
        <p class="mb-6 text-lg text-gray-700">
          Хэрвээ зөвшөөрч байвал доорх товч дээр дарна уу. Би чамайг хүлээж байгаа... 💖
        </p>
  
        <button
          class="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-xl transition-transform duration-300 hover:scale-110 glow"
          @click="sendInvite"
          :disabled="loading"
        >
          ✅ Зөвшөөрөх
        </button>
  
        <!-- 🎉 Амжилтын мессеж -->
        <p v-if="success" class="text-green-600 mt-8 text-lg animate-fade-in">
          🎉 Илгээсэн! 📅 2025.04.18 | 🕕 13:10 | 📍 сургууль дээр — уулзъя ❤️
        </p>
  
        <p v-if="error" class="text-red-600 mt-8 text-lg animate-fade-in">
          😢 Алдаа гарлаа. Дахин оролдоно уу.
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const loading = ref(false)
  const success = ref(false)
  const error = ref(false)
  
  const sendInvite = async () => {
  loading.value = true
  success.value = false
  error.value = false

  try {
    await $fetch('https://date-invite-backend.onrender.com/api/send-invite', {
      method: 'POST',
      body: {
        name: 'Нууцлаг бүсгүй 😍',
        email: 'orgiloorgil16@gmail.com'
      }
    })

    success.value = true
    playSound()
  } catch (err) {
    error.value = true
    console.error('💥 API error:', err)
  } finally {
    loading.value = false
  }
}

  
  const playSound = () => {
    const audio = new Audio('/yes.mp3')
    audio.play()
  }
  </script>
  
  <style scoped>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  .animate-fade-in {
    animation: fade-in 0.4s ease-out;
  }
  
  .glow {
    box-shadow: 0 0 10px #f472b6, 0 0 30px #ec4899;
  }
  
  .heart {
    position: absolute;
    font-size: 1.5rem;
    opacity: 0.7;
    animation: floatUp 8s infinite ease-in-out;
  }
  .heart-1 { left: 5%; animation-delay: 0s; }
  .heart-2 { left: 15%; animation-delay: 1s; }
  .heart-3 { left: 25%; animation-delay: 2s; }
  .heart-4 { left: 35%; animation-delay: 3s; }
  .heart-5 { left: 45%; animation-delay: 4s; }
  .heart-6 { left: 55%; animation-delay: 5s; }
  .heart-7 { left: 65%; animation-delay: 6s; }
  .heart-8 { left: 75%; animation-delay: 7s; }
  .heart-9 { left: 85%; animation-delay: 2.5s; }
  .heart-10 { left: 95%; animation-delay: 1.5s; }
  
  @keyframes floatUp {
    0% {
      bottom: -50px;
      opacity: 0;
      transform: scale(0.5) rotate(0deg);
    }
    50% {
      opacity: 1;
    }
    100% {
      bottom: 100%;
      transform: scale(1.2) rotate(360deg);
      opacity: 0;
    }
  }
  </style>
  