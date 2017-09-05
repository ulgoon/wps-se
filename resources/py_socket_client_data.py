import socket


host = 'localhost'
port = 4444
bufsize = 1024
addr = (host, port)

if __name__ == '__main__':
    client_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    host = input("host(localhost):") or host
    port = input("port(4444):") or port

    sock_addr = (host, int(port))
    client_sock.connect(sock_addr)

    payload = 'GET TIME'

    try:
        while True:
            client_sock.send(payload.encode('utf-8'))
            data = client_sock.recv(bufsize)
            print(repr(data))
            more = input("Want more?[y/n]")
            if more == 'y':
                payload = input("Enter payload: ")
            else:
                break
    except KeyboardInterrupt:
        print("Client left")
    
    client_sock.close()
