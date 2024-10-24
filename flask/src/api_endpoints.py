import logging
import time

from datetime import timedelta
from flask import Blueprint, Response, jsonify

logger = logging.getLogger(__name__)
api_endpoints = Blueprint('api', __name__, url_prefix='/api')


@api_endpoints.route('/status', methods=['GET'])
def status():
    return jsonify({"success": True, "message": "API is up and running"})