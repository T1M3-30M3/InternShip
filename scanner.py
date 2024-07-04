import requests
import json

def geturlinfo(url):
    api = "your_api_key"
    apiurl = f"htttps://urlscan.io/api/v1//scan/?url={url}"
    headers = {"API_key" : api, "Content-Type" : "application/json"}
    response = requests.post(apiurl, headers=headers)
    return response.json()

def checkphishing(urlinfo):
    if urlinfo["verdicts"]["urlscan"]["score"] > 50;
        return True
    else
        return False

def main():
    url = input("Enter your URL :")
    urlinfo = geturlinfo(url)
    if checkphishing(urlinfo):
        print ("This link maybe is phishing link")
    else:
        print("It is Safe")


if __name__ == "__main__":
    main()