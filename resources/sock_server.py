import socket
from time import ctime


host = 'localhost'
port = 12345
bufsiz = 1024
addr = (host, port)

if __name__ == '__main__':
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind(addr)
    server_socket.listen()
    server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

    while True:
        print("The server is listening on %s:%d" % (host, port))
        client_socket, addr = server_socket.accept()
        print("Client socket accepted from ", addr)

        while True:
            data = client_socket.recv(1024)
            if not data or data.decode('UTF-8') == 'END':
                break
            print("Message From Client : %s" % data.decode('UTF-8'))
            print("Sending to Client: %s" % ctime())
            try:
                client_socket.send(bytes(ctime(), 'utf-8'))
            except KeyboardInterrupt:
                print("Exited")

        client_socket.close()
    server_socket.close()
