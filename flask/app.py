
from flask import Flask, url_for, request,make_response, render_template
import requests
app = Flask(__name__)

# routing
@app.route('/omkar')
def omkar():
    return 'Hello, Omkar!'

@app.route('/siddhya')
def siddhya():
    return 'Hello, Siddhya!'

@app.route('/<name>')
def user(name):
    if name == 'omkar':
        return url_for('omkar')
    elif name == 'siddhya':
        return url_for('siddhya')
    # elif name == 'github':
    #     return url_for('api_github')
    # elif name == 'post':
    #     return url_for('post_method')
    # elif name == 'put':
    #     return url_for('put_method')
    # elif name == 'delete':
    #     return url_for('delete_method')
    else:
        return 'Hello, User!'
   
#http methods
@app.route('/github', methods=['GET'])
def api_github():
    resoponse = requests.get('https://api.github.com/users/OmkarLande')
    return resoponse.json()
    
@app.route('/post', methods=['POST'])
def post_method():
    return 'POST method'

@app.route('/put/:id', methods=['PUT'])
def put_method():
    return 'PUT method'

@app.route('/delete/:id', methods=['DELETE'])
def delete_method():
    return 'DELETE method'

# request object
@app.route('/submit', methods=['POST'])
def submit_form():
    username = request.form['username']
    password = request.form['password']
    return username + ' ' + password

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('q')
    return query

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    return file.filename

@app.route('/json', methods=['POST'])
def json_data():
    data = request.json
    return data

#cookies
@app.route('/')
def index():
    res = make_response('Hello, World!')
    res.set_cookie('name', 'Omkar')
    return res

@app.route('/getcookie')
def get_cookie():
    name = request.cookies.get('name')
    return name

@app.route('/deleteCookie')
def delete_cookie():
    res = make_response('Cookie Deleted')
    res.set_cookie('name', '', expires=0)
    return res

#file uploading
@app.route('/uploadFile')
def upload():
    return render_template('file_upload.html')

@app.route('/success', methods=['POST'])
def success():
    if request.method == 'POST':
        f = request.files['file']
        f.save(f.filename)
    return render_template('success.html', name=f.filename)



if __name__ == '__main__':
    app.run(debug=True)