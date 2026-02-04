// /app/lib/cookies.ts
import { setCookie, getCookie } from "cookies-next";
import { Suggestion } from "../components/SearchBar";

export function saveCity(city: Suggestion) {
  setCookie("lastCity", JSON.stringify(city), { maxAge: 60 * 60 * 24 * 7 });
}

export function loadCity(): Suggestion | null {
  const value = getCookie("lastCity");
  if (typeof value !== "string") return null;
  try {
    return JSON.parse(value) as Suggestion;
  } catch (e) {
    return null;
  }
}