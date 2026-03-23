from flask import Flask
from flask_cors import CORS
import os

app = Flask(__name__)

# CORS settings
CORS(app)

# Health check endpoint
@app.route('/health', methods=['GET'])
def health_check():
    return {'status': 'healthy'}, 200

# Load environment variables
app.config['ENV'] = os.getenv('ENV', 'development')

if __name__ == '__main__':
    app.run()