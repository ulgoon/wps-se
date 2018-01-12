import socket


host = 'localhost' #127.0.0.1
port = 12347
addr = (host, port)
bufsiz = 2048

if __name__ == '__main__':
    client_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    host = input("Type the host: ") or host
    port = input("Type the port: ") or port

    sock_addr = (host, int(port))
    client_sock.connect(sock_addr)

    payload = 'GET TIME'
    try:
        while True:
            client_sock.send(payload.encode('utf-8'))
            data = client_sock.recv(bufsiz)
            print(repr(data))
            more = input("Want more?(y/n)")
            if more.lower() == 'y':
                payload = input("What do you want? ")
            else:
                break
    except KeyboardInterrupt:
        print("Exited by client")

    client_sock.close()





