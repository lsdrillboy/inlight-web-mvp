# InLight — Web MVP (Next.js 14, App Router)

Готовый старт проекта по ТЗ: RU/EN, Tailwind, базовые страницы, калькулятор РАДАР, API, простая i18n.

## Быстрый старт
```bash
npm i
npm run dev
# открой http://localhost:3000/ru  или /en
```

## Что внутри
- Next.js 14 (App Router), TypeScript, Tailwind.
- Маркетинговые страницы: главная, метод, калькулятор (форма + результат), команда, FAQ, контакты.
- i18n через сегмент маршрута `/[lang]` (ru/en), словари в `src/lib/i18n`.
- API `/api/radar/calc` — серверный расчёт по методике (consciousness/action/realization/...).
- Компоненты UI: Header, Footer, Lang Switcher, Hero, Accordion, RadarForm/Result.
- Тема/стили: фирменные фиолетово-оранжевые, лёгкая "космическая" подложка.

## TODO для продакшена
- Подключить Supabase/Auth, БД и PDF-генерацию.
- Наполнить базу интерпретаций РАДАР (сейчас мини-демо).
- Добавить страницы: марафон, ретриты, практики, блог, ЛК.

## Лицензия
MIT (используй и дорабатывай свободно).
