// src/hooks/useAuth.js

const errorData = {
  code: "rate-limited",
  message: "You have hit the rate limit. Please upgrade to keep chatting.",
  providerLimitHit: false,
  isRetryable: true
};

export default function useAuth() {
  // Aquí puedes usar errorData si quieres mostrarlo
  console.log(errorData.message);

  // Devuelve lo que sea necesario en tu hook
  return { errorData };
}
