import os


class Program(object):
    def __init__(self):
        pass

    @staticmethod
    def run_frontend():
        this_folder = os.path.dirname(os.path.abspath(__file__))
        os.chdir(this_folder + "/frontend")
        os.system("npm install")
        os.system("npm run dev &")

    @staticmethod
    def run_backend():
        this_folder = os.path.dirname(os.path.abspath(__file__))
        os.chdir(this_folder + "/backend")
        os.system("dotnet run")

    @staticmethod
    def run_full():
        Program.run_frontend()
        Program.run_backend()


def get_menu():
    menu = """
    1 - Run Frontend
    2 - Run Backend
    3 - Run Full
    0 - Exit
    """
    return menu


def run():
    while True:
        os.system("clear")
        print(get_menu())
        option = input("Option: ")
        if option == "1":
            Program.run_frontend()
        elif option == "2":
            Program.run_backend()
        elif option == "3":
            Program.run_full()
        elif option == "0":
            break
        else:
            print("Invalid option")
            input("Press enter to continue")

        input("Press enter to continue")

    os.system("clear")
    print("Goodbye")


if __name__ == "__main__":
    run()
