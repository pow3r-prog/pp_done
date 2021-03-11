import threading
import time

start = time.perf_counter()

def do_boing():
    print('Заправка літака "Боїнг"')
    time.sleep(1)
    print('')
    print('Виліт літака "Боїнг" по 1 полосі')

def do_mixa():
    print('Заправка літака "Місько"')
    time.sleep(2.01)
    print('Виліт літака "Місько" по 1 полосі')

def do_galya():
    print('Заправка літака "Галинка"')
    time.sleep(2.02)
    print('Виліт літака "Галинка" по 2 полосі')

def do_andriy():
    print('Заправка літака "Андрій"')
    time.sleep(3.01)
    print('Виліт літака "Андрій" по 1 полосі')

def do_vasya():
    print('Заправка літака "Василь"')
    time.sleep(3.02)
    print('Виліт літака "Василь" по 2 полосі')
    time.sleep(1)
    print('Розбивася літак "Василь"')
    time.sleep(1)
    print('Помер льотчик Льоня')

t1 = threading.Thread(target=do_boing)
t2 = threading.Thread(target=do_mixa)
t3 = threading.Thread(target=do_galya)
t4 = threading.Thread(target=do_andriy)
t5 = threading.Thread(target=do_vasya)

t1.start()
t2.start()
t3.start()
t4.start()
t5.start()
