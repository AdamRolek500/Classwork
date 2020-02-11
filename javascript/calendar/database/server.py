from http.server import BaseHTTPRequestHandler
import json


class Server(BaseHTTPRequestHandler):
    def do_HEAD(self):
        return

    def do_GET(self):
        print("HERE")
        self.respond()

    def do_POST(self):
        self.respond()

    def do_OPTIONS(self):
        self.respond()

    def handle_http(self, status, content_type):
        # a Python object (dict):
        x = {
            "name": "John",
            "age": "30",
            "city": "New York"
        }

        # convert into JSON:
        y = json.dumps(x)

        self.send_response(status)
        self.send_header("Content - type", content_type)
        self.send_header('Access-Control-Allow-Credentials', 'true')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header("Access-Control-Allow-Headers", "X-Requested-With, Content-type")
        self.end_headers()
        return bytes(y, "UTF-8")

    def respond(self):
        content = self.handle_http(200, "application/json")
        self.wfile.write(content)