import socket
import sys


if __name__ == '__main__':
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    except socket.error as e:
        print("Failed to create socket")
        print("Reason:", str(e))
        sys.exit();

    print("Socket created")

    host = input("host(localhost): ")
    port = input("port(4444): ")

    try:
        sock.connect((host, int(port)))
        print("Socket Connected on", host, port)
        sock.shutdown(2)
    except socket.error as e:
        print("Sockect connect error")
        print("Reason:", str(e))
        sys.exit();
