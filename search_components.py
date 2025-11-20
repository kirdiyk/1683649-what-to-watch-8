#!/usr/bin/env python3
"""
Скрипт для поиска компонентов умного стола на маркетплейсах
Требует ручного поиска, но предоставляет структурированные запросы
"""

import json
from datetime import datetime

# Компоненты для поиска
COMPONENTS = {
    "1_подсветка": {
        "name": "Подсветка LED с экранированием/рассеивателем",
        "keywords": [
            "LED лента RGB 12V экран",
            "LED лента для стола рассеиватель",
            "LED профиль алюминиевый рассеиватель",
            "LED контроллер RGB WiFi",
            "LED лента RGBW 24V",
            "алюминиевый профиль для LED ленты",
            "рассеиватель для LED ленты",
            "LED контроллер с пультом"
        ],
        "markets": {
            "aliexpress": "https://www.aliexpress.com/wholesale?SearchText={}",
            "ozon": "https://www.ozon.ru/search/?text={}",
            "yandex": "https://market.yandex.ru/search?text={}",
            "wb": "https://www.wildberries.ru/catalog/0/search.aspx?search={}"
        }
    },
    "2_usb_hub": {
        "name": "USB Hub зарядный",
        "keywords": [
            "USB hub зарядка настольный",
            "USB концентратор быстрая зарядка",
            "USB hub QC 3.0 PD",
            "USB hub под стол крепление",
            "USB hub 6 портов зарядка",
            "USB hub с быстрой зарядкой",
            "USB концентратор настольный",
            "USB hub с креплением"
        ],
        "markets": {
            "aliexpress": "https://www.aliexpress.com/wholesale?SearchText={}",
            "ozon": "https://www.ozon.ru/search/?text={}",
            "yandex": "https://market.yandex.ru/search?text={}",
            "wb": "https://www.wildberries.ru/catalog/0/search.aspx?search={}"
        }
    },
    "3_podstole": {
        "name": "Подстолье регулируемое",
        "keywords": [
            "подстолье регулируемое электрическое",
            "ножки стола регулируемые высота",
            "подъемный механизм для стола",
            "регулируемые опоры стола",
            "электрические ножки стола",
            "механизм подъема стола",
            "регулируемые подставки стола",
            "ножки стола с регулировкой"
        ],
        "markets": {
            "aliexpress": "https://www.aliexpress.com/wholesale?SearchText={}",
            "ozon": "https://www.ozon.ru/search/?text={}",
            "yandex": "https://market.yandex.ru/search?text={}",
            "wb": "https://www.wildberries.ru/catalog/0/search.aspx?search={}"
        }
    },
    "4_fanera": {
        "name": "Фанера для столешницы",
        "keywords": [
            "фанера березовая 18мм",
            "фанера влагостойкая ФСФ",
            "фанера для столешницы",
            "фанера шлифованная",
            "фанера березовая 20мм",
            "фанера ФСФ 18мм",
            "фанера для мебели",
            "фанера ламинированная"
        ],
        "markets": {
            "ozon": "https://www.ozon.ru/search/?text={}",
            "yandex": "https://market.yandex.ru/search?text={}",
            "wb": "https://www.wildberries.ru/catalog/0/search.aspx?search={}",
            "leroy": "https://leroymerlin.ru/search/?q={}"
        }
    },
    "5_controllers": {
        "name": "Контроллеры питания DC-DC",
        "keywords": [
            "DC-DC преобразователь 12V 5V",
            "понижающий преобразователь напряжения",
            "step down converter модуль",
            "DC-DC buck converter",
            "LM2596 модуль",
            "понижающий преобразователь",
            "DC-DC модуль 12V 5V",
            "преобразователь напряжения модуль"
        ],
        "markets": {
            "aliexpress": "https://www.aliexpress.com/wholesale?SearchText={}",
            "ozon": "https://www.ozon.ru/search/?text={}",
            "yandex": "https://market.yandex.ru/search?text={}",
            "wb": "https://www.wildberries.ru/catalog/0/search.aspx?search={}"
        }
    },
    "6_rozetki": {
        "name": "Удлинитель/розетки",
        "keywords": [
            "встраиваемая розетка столешница",
            "розетка врезная стол",
            "удлинитель под стол крепление",
            "блок розеток встраиваемый",
            "розетка для стола врезная",
            "удлинитель настенный крепление",
            "блок розеток под стол",
            "розетка с USB врезная"
        ],
        "markets": {
            "aliexpress": "https://www.aliexpress.com/wholesale?SearchText={}",
            "ozon": "https://www.ozon.ru/search/?text={}",
            "yandex": "https://market.yandex.ru/search?text={}",
            "wb": "https://www.wildberries.ru/catalog/0/search.aspx?search={}"
        }
    }
}

def generate_search_links():
    """Генерирует ссылки для поиска на маркетплейсах"""
    results = {}
    
    for comp_id, comp_data in COMPONENTS.items():
        results[comp_id] = {
            "name": comp_data["name"],
            "searches": []
        }
        
        for keyword in comp_data["keywords"]:
            search_entry = {
                "keyword": keyword,
                "links": {}
            }
            
            for market, url_template in comp_data["markets"].items():
                search_entry["links"][market] = url_template.format(
                    keyword.replace(" ", "+")
                )
            
            results[comp_id]["searches"].append(search_entry)
    
    return results

def print_search_links():
    """Выводит ссылки для поиска"""
    results = generate_search_links()
    
    print("=" * 80)
    print("ССЫЛКИ ДЛЯ ПОИСКА КОМПОНЕНТОВ УМНОГО СТОЛА")
    print("=" * 80)
    print()
    
    for comp_id, comp_data in results.items():
        print(f"\n{'='*80}")
        print(f"КОМПОНЕНТ: {comp_data['name']}")
        print(f"{'='*80}\n")
        
        for idx, search in enumerate(comp_data["searches"], 1):
            print(f"\nЗапрос {idx}: {search['keyword']}")
            print("-" * 80)
            for market, link in search["links"].items():
                print(f"  {market.upper():15} {link}")
            print()

def save_to_json():
    """Сохраняет ссылки в JSON файл"""
    results = generate_search_links()
    filename = f"search_links_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    
    print(f"\nСсылки сохранены в файл: {filename}")
    return filename

if __name__ == "__main__":
    print_search_links()
    save_to_json()
    
    print("\n" + "=" * 80)
    print("ИНСТРУКЦИЯ:")
    print("1. Используйте предоставленные ссылки для поиска на каждом маркетплейсе")
    print("2. Для каждого компонента найдите 10 лучших вариантов")
    print("3. Заполните таблицы в файле 'умный-стол-компоненты.md'")
    print("4. Обратите внимание на:")
    print("   - Цену")
    print("   - Рейтинг (минимум 4.0+)")
    print("   - Количество отзывов (минимум 10+)")
    print("   - Характеристики товара")
    print("=" * 80)
