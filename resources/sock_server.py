import socket
from time import ctime


host = 'localhost'
port = 12347
addr = (host, port)
bufsiz = 2048

if __name__ == '__main__':
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.bind(addr)
    server_socket.listen(5)
    server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

    while True:
        print("Server is waiting..")
        client_sock, addr = server_socket.accept()
        print("Client is connected: ", addr)

        while True:
            data = client_sock.recv(bufsiz)
            if not data or data.decode('utf-8') == 'END':
                break
            print("Received from Client: ", data.decode('utf-8'))
            print("Send time to Client: ", ctime())

            try:
                client_sock.send(bytes(ctime(), 'utf-8'))
            except KeyboardInterrupt:
                print("Exited by client")

        client_sock.close()
    server_socket.close()




