from multiprocessing import Process

def plane_1(Boing):
  print(Boing)

def plane_2(Nadiya):
  print(Nadiya)

def plane_3(Butterfly):
  print(Butterfly)

if __name__ == '__main__':
  pilots_1 = ['Mihailo', 'Andriy' +  '\n' + 10*'-']
  pilots_2 = ['Vasya', 'Mykola'  +  '\n' + 10*'-']
  pilots_3 = ['Anton', 'Valeriy'  +  '\n' + 10*'-']
  
  processes = []
  for pilot_1 in pilots_1:
    proc = Process(target=plane_1, args = (pilot_1,))
    processes.append(proc)
    proc.start()
  for p1 in processes:
    p1.join()

  for pilot_2 in pilots_2:
    proc = Process(target=plane_2, args = (pilot_2,))
    processes.append(proc)
    proc.start()
  for p2 in processes:
    p2.join()

  for pilot_3 in pilots_3:
    proc = Process(target=plane_3, args = (pilot_3,))
    processes.append(proc)
    proc.start()
  for p3 in processes:
    p3.join()
  