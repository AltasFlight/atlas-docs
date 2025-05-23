#INFO

### *Базовий порядок UART*

- SERIAL0 = console = USB (MAVLink2)

- SERIAL1 = Telemetry1 (MAVlink2 default)= USART2 DMA-enabled

- SERIAL2 = Telemetry2 (MAVlink2 default)= USART6 DMA-enabled

- SERIAL3 = GPS1 = USART1

- SERIAL4 = GPS2 = UART4

- SERIAL6 = USER = UART7


Серійні протоколи можна налаштовувати відповідно до власних уподобань.
Це дозволяє адаптувати порти для різних периферійних пристроїв та задач, забезпечуючи гнучкість у конфігурації системи.


### *PWM Виходи*

Контролер Atlas Control підтримує до 14 PWM-виходів. Усі 14 каналів підтримують стандартні формати PWM. Канали з 1 по 12 також підтримують DShot, а 13 і 14 — ні (немає DMA-підтримки).

Групування виходів:

- Група 1: Виходи 1, 2, 3, 4
Підтримують Bi-directional DShot, якщо використовується відповідна прошивка

- Група 2: Виходи 5, 6, 7, 8

- Група 3: Виходи 9, 10, 11, 12

- Група 4: Виходи 13, 14 (без DMA, тільки PWM)

!!! Note
Усі виходи в межах однієї групи повинні використовувати однакову частоту та протокол.
Якщо хоч один канал у групі використовує DShot, то всі канали цієї групи також повинні працювати на DShot.

### *GPIOs*

14 виходів можна використовувати як GPIO (реле, кнопки, RPM тощо). Щоб їх використовувати, потрібно встановити SERVOx_FUNCTION виходу на -1. Див. сторінку GPIO для отримання додаткової інформації.

Нумерація GPIO для використання в параметрах PIN в ArduPilot така:

- PWM1(M1) 50

- PWM2(M2) 51

- PWM3(M3) 52

- PWM4(M4) 53

- PWM5(M5) 54

- PWM6(M6) 55

- PWM7(M7) 56

- PWM8(M8) 57

- PWM9(M9) 58

- PWM10(M10) 59

- PWM11(M11) 60

- PWM12(M12) 61

- PWM13(M13) 62

- PWM14(M14) 63

### *Аналогові входи:*

Atlas Control має 2 аналогові входи, один для до 6.6 В другий для 3,3 В.

- ADC Pin18 -> ADC 6.6V Sense

- ADC Pin4 -> ADC 3.3V Sense

- Analog 3.3V RSSI input pin = 6

### *Вхід RC (RC Input)*

Пін RCIN, який за замовчуванням прив’язаний до таймерного входу, може використовуватись для всіх протоколів приймачів, що підтримуються ArduPilot, окрім CRSF/ELRS та SRXL2, які потребують справжнього UART-з'єднання. Однак FPort, при підключенні через RCIN, забезпечує лише прийом RC-сигналів, без телеметрії.

Щоб забезпечити підтримку CRSF та вбудованої телеметрії в FPort, CRSF та SRXL2 приймачах, потрібно використовувати повноцінний UART, наприклад SERIAL6 (UART7). Нижче наведені налаштування для підключення через SERIAL6:

- Параметр SERIAL6_PROTOCOL слід встановити в "23".

- Для FPort потрібно також встановити SERIAL6_OPTIONS у "15".

- Для CRSF — SERIAL6_OPTIONS має бути "0".

- Для SRXL2 — SERIAL6_OPTIONS має бути "4", і потрібно підключати лише TX пін приймача.

У ArduPilot можна використовувати будь-який UART-порт для підключення RC-систем (крім PPM-приймачів). Детальніше дивіться в розділі Radio Control Systems (Системи радіокерування).

Живлення на цьому роз'ємі забезпечується через USB або через PMU.

### *Моніторинг батареї*

Якщо ви використовуєте аналоговий монітор батареї, підключіть його до роз’єму Power A і встановіть наступні параметри (якщо використовується як другий монітор — використовуйте параметри BATT2):

- BATT_MONITOR = 4

- BATT_CURR_PIN = 17

- BATT_VOLT_PIN = 16

Задайте параметри BATT_AMP_PERVLT та BATT_VOLT_MULT відповідно до характеристик використовуваного аналогового модуля живлення (PMU).

Якщо ви використовуєте DroneCAN-модуль живлення та монітором батареї — DroneCAN Power Module. Його слід підключати до роз’єму Power C, і він вже попередньо налаштований для використання.
