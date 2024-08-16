from http.server import BaseHTTPRequestHandler, HTTPServer
import subprocess

class RequestHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        # Log the webhook payload
        with open('/path/to/webhook_payload.log', 'wb') as f:
            f.write(post_data)
        
        # Trigger deployment or other actions
        subprocess.call(['/path/to/deploy.sh'])
        
        self.send_response(200)
        self.end_headers()

server_address = ('', 8080)  # Port 8080
httpd = HTTPServer(server_address, RequestHandler)
httpd.serve_forever()
