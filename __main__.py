from flask import Flask, render_template, jsonify, request
from email_utilities import validate_email
from database_access import log_failed_attempt

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/api/submit-email', methods=['POST'])
def submit_email():
    data = request.json
    email = data.get('email')
    
    # IP Address capturing
    ip_address = request.remote_addr

    if not validate_email(email):
        log_failed_attempt(ip_address)
        return jsonify(success=False, message="Invalid Email Format")
    
    # Store email in DB (omitted here for brevity)

    return jsonify(success=True)

@app.route('/forum')
def forum():
    # Logic to fetch and display posts can be added here
    return render_template('forum.html')

@app.route('/feed')
def feed():
    # Logic to fetch and display media feeds can be added here
    return render_template('feed.html')

@app.route('/profile/<username>')
def profile(username):
    # Logic to fetch user data based on username can be added here
    return render_template('profile.html', username=username)

@app.route('/listings')
def listings():
    # Logic to fetch and display car listings can be added here
    return render_template('listings.html')

if __name__ == '__main__':
    app.run(debug=True)
